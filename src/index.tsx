import { ActionPanel, List, Action, Color, Icon } from "@raycast/api";

class ToneIndicatorItem {
  indicator: string;
  meaning: string;
  explanation?: string;
  example?: string;
  additionalIndicator?: string;
  externalURL?: string;

  constructor(
    indicator: string,
    meaning: string,
    explanation: string = "",
    example: string = "",
    additionalIndicator: string = "",
    externalURL: string = "",
  ) {
    this.indicator = indicator;
    this.meaning = meaning;
    this.explanation = explanation;
    this.example = example;
    this.additionalIndicator = additionalIndicator;
    this.externalURL = externalURL;
  }
}

const listItems: ToneIndicatorItem[] = [
  {
    indicator: `/j`,
    meaning: `joking`,
    explanation: `used when saying something in a joking manner`,
    example: `so I'm pretty much the president of twitter /j`,
  },
  {
    indicator: `/hj`,
    meaning: `half-joking`,
    explanation: `used when saying something that is kind of a joke but kind of serious`,
    example: `well I am usually right /hj`,
  },
  {
    indicator: `/sarc`,
    meaning: `sarcastic / sarcasm`,
    additionalIndicator: `/s`,
    explanation: `the use of words that mean the opposite of what you really want to say`,
    example: `I really love feeling sad /sarc`,
    externalURL: `https://www.merriam-webster.com/dictionary/sarcasm`,
  },
  {
    indicator: `/srs`,
    meaning: `serious`,
    explanation: `used when saying something you really mean`,
    example: `I really appreciate you /srs`,
  },
  {
    indicator: `/nsrs`,
    meaning: `not serious`,
    explanation: `used when saying something not too seriously`,
    example: `you're the worst /nsrs`,
  },
  {
    indicator: `/lh`,
    meaning: `light-hearted`,
    explanation: `used when saying something lightheartedly`,
    example: `hey leave me out of this /lh`,
    externalURL: `https://www.merriam-webster.com/dictionary/lighthearted`,
  },
  {
    indicator: `/gen`,
    meaning: `genuine`,
    additionalIndicator: `/g`,
    explanation: `used when saying something genuinely or when asking a legitimate question`,
    example: `I'm proud of you /gen`,
    externalURL: `https://www.dictionary.com/browse/genuine`,
  },
  {
    indicator: `/ij`,
    meaning: `inside joke`,
    explanation: `a joke that is understood only by people with special knowledge about something:
typically something only a small and / or specific group of people are aware of - those outside of the group will probably be confused by it or simply not find it funny in the same way those within the group do used when saying an inside joke`,
    example: `ah my glubbies /ij`,
    externalURL: `https://www.merriam-webster.com/dictionary/inside%20joke`,
  },
  {
    indicator: `/ref`,
    meaning: `reference`,
    explanation: `reference - typically to media (movies, tv, music, etc)`,
    example: `memento mori /ref`,
  },
  {
    indicator: `/t`,
    meaning: `teasing`,
    explanation: `"to irritate or provoke... often playfully"
used when teasing someone`,
    example: `ok sure mr 'idk what I'm doing' /t`,
    externalURL: `https://www.dictionary.com/browse/teasing`,
  },
  {
    indicator: `/nm`,
    meaning: `not mad`,
    explanation: `to indicate you are not actually mad or upset about something`,
    example: `ouch I really related there /nm`,
  },
  {
    indicator: `/lu`,
    meaning: `a little upset`,
    explanation: `used when upset about something but not too upset`,
    example: `oh that sucks /lu`,
  },
  {
    indicator: `/nf`,
    meaning: `not forced`,
    explanation: `used when saying to do something or when asking someone to do something`,
    example: `retweet this /nf`,
  },
  {
    indicator: `/nbh`,
    meaning: `nobody here`,
    explanation: `used when saying something vague to assure followers it is not indirectly to or about them`,
    example: `sometimes people say things that make me so upset /nbh`,
  },
  {
    indicator: `/nst`,
    meaning: `not subtweeting`,
    explanation: `used to assure people you aren't subtweeting them - a subtweet is a tweet "that refers to a particular user without directly mentioning them"`,
    example: `wow I really dislike (whatever thing you dislike) /nst`,
    externalURL: `https://x.com/WeWere_Here/status/1321676291142111232`,
  },
  {
    indicator: `/nay`,
    meaning: `not at you`,
    explanation: `used when saying something but not meaning it at the person you are responding to someone quote retweets something you dislike with
> "look at this"
and you respond with
> "no thank you /nay"
you would be saying no thank you to whatever they quote retweeted. not no thank you to them saying to look at it.`,
    example: ``,
    externalURL: `https://x.com/gublersdimples/status/1317726479761829888`,
  },
  {
    indicator: `/ay`,
    meaning: `at you`,
    explanation: `used to make the person aware you are addressing them`,
    example: ``,
  },
  {
    indicator: `/nbr`,
    meaning: `not being rude`,
    explanation: `used when saying something that may seem rude but isn't meant to be rude
> "I don't think you're doing that right /nbr"
in that situation I would probably just be trying to be helpful by saying that they weren't doing something correctly. I want to make sure they know I was just trying to help not trying to be mean.`,
    example: `I don't think you're doing that right /nbr`,
  },
  {
    indicator: `/ot`,
    meaning: `off-topic`,
    explanation: `used when saying something that isn't directly related to what was being discussed`,
    example: ``,
  },
  {
    indicator: `/th`,
    meaning: `threat`,
    explanation: `an expression of intention to inflict evil, injury, or damage
Used when giving a threat`,
    example: `if you don't stop I will block you /th`,
  },
  {
    indicator: `/cb`,
    meaning: `clickbait`,
    explanation: `clickbait - "a form of false advertisement... designed to attract attention"
used when using clickbait`,
    example: `omg you have to look at this it will change your life /cb`,
    externalURL: `https://en.wikipedia.org/wiki/Clickbait`,
  },
  {
    indicator: `/fake`,
    meaning: `fake`,
    explanation: `used when saying or referring to something not real
someone could post a photo that looks like a screenshot of a tweet but really it has been edited to say something different they would caption it with "/f"`,
    example: ``,
    additionalIndicator: `/f`,
  },
  {
    indicator: `/quote`,
    meaning: `quote`,
    explanation: `used when quoting something or someone
> "oh yes the past can hurt but the way I see it you can either run from it or you can learn from it /q"`,
    example: ``,
    additionalIndicator: `/q`,
  },
  {
    indicator: `/ly`,
    meaning: `lyrics`,
    explanation: `used when quoting specifically song lyrics
> "I say the wrong shit at the right times /ly"`,
    example: `you know where you are? /ly`,
    additionalIndicator: `/l`,
  },
  {
    indicator: `/copypasta`,
    meaning: `copypasta`,
    explanation: `"a block of text which is copied and pasted across the internet"
used when using a copypasta
>"[idols name] do your shoes need shining? [idols name] [idols name] please Do you need coffee? Come back PLEASE Dont go away from me [idols name] please /c"`,
    example: ``,
    additionalIndicator: `/c`,
    externalURL: `https://en.wikipedia.org/wiki/Copypasta`,
  },
  {
    indicator: `/meta`,
    meaning: `metaphor`,
    explanation: `"a figure of speech in which a term or phrase is applied to something to which it is not literally applicable in order to suggest a resemblance"
used when saying something metaphorically
> "he is a shining star /m"

he is not actually a star. he is being compared to one.`,
    example: `he is a shining star /m`,
    additionalIndicator: `/m`,
  },
  {
    indicator: `/li`,
    meaning: `literal`,
    explanation: `"following the words of the original very closely and exactly"
used when saying something literally
> "wowie I don't like that /li"

I would be saying that when I do actually dislike something.`,
    example: `wowie I don't like that /li`,
  },
  {
    indicator: `/rt`,
    meaning: `rhetorical`,
    explanation: `"a question asked in order to create a dramatic effect or to make a point rather than to get an answer"
used when saying or asking something rhetorically
> "who cares? /rt"

or

>"who cares? /rh"

rt can stand for retweet on twitter. because of that I prefer /rh but do whatever you want really.`,
    example: `who cares? /rh`,
  },
  {
    indicator: `/hyp`,
    meaning: `hyperbole`,
    explanation: `"exaggerated statements or claims not meant to be taken literally"
used when using a hyperbole
> "I have a million things to do today /hyp"

I do not actually have to do one million things today. I was just meaning I have a lot of things to do today.`,
    example: `I have a million things to do today /hyp`,
  },
  {
    indicator: `/ex`,
    meaning: `exaggeration`,
    explanation: `"the action of making statements that represent something as better or worse than it really is"
used when exaggerating`,
    example: `what took you so long? I was waiting forever /ex`,
  },
  {
    indicator: `/p`,
    meaning: `platonic`,
    explanation: `a friendship type of love, care, intimacy, etc
used when saying something with platonic intentions`,
    example: `I love you /p`,
  },
  {
    indicator: `/r`,
    meaning: `romantic`,
    explanation: `a more than friendship type of love, care, intimacy, etc; typically of partners
used when saying something with romantic intentions`,
    example: `I love you /r`,
  },
  {
    indicator: `/a`,
    meaning: `alterous`,
    explanation: `"an attraction best described as wanting emotional closeness without necessarily being (at all or entirely) platonic and/or romantic"
used when saying something with alterous intentions`,
    example: `I love you /a`,
    externalURL: "https://aromantic.fandom.com/wiki/Alterous_Attraction",
  },
  {
    indicator: `/sx`,
    meaning: `sexual intent`,
    explanation: `used when meaning something in a sexual way`,
    example: ``,
    additionalIndicator: `/x`,
  },
  {
    indicator: `/nsx`,
    meaning: `non-sexial intent`,
    explanation: `used when meaning something in a not sexual way`,
    example: ``,
    additionalIndicator: `/ns`,
  },
  {
    indicator: `/pos`,
    meaning: `positive / positive connotation`,
    explanation: `used when saying something and meaning it in a positive way
> "oh my goodness I'm going to cry /pos"

implies I'm crying for a happy reason`,
    example: `oh my goodness, I'm going to cry /pos`,
    additionalIndicator: `/pc`,
  },
  {
    indicator: `/neg`,
    meaning: `negative / negative connotation`,
    explanation: `used when saying something and meaning it in a negative way
> "oh my goodness I'm going to cry /neg"

implies I'm crying for an upsetting reason`,
    example: `oh my goodness, I'm going to cry /neg`,
  },
  {
    indicator: `/neu`,
    meaning: `neutral / neutral connotation`,
    explanation: `used to show what you are saying is neutral or that you feel indifferent about it
> "oh yeah I don't care /neu"

you don't care about something but not in a mean or negative way - you are just indifferent`,
    example: `oh yeah, I don't care /neu`,
  },
];

// loop through the listItems and create a new list where we have created ToneIndicatorItem objects
const toneIndicatorItems = listItems.map(
  (item) =>
    new ToneIndicatorItem(
      item.indicator,
      item.meaning,
      item.explanation,
      item.example,
      item.additionalIndicator,
      item.externalURL,
    ),
);

export default function Command() {
  return (
    <List isShowingDetail>
      {toneIndicatorItems.map((item) => (
        <List.Item
          key={item.indicator}
          title={item.meaning}
          accessories={[{ tag: item.indicator }, item.additionalIndicator ? { tag: item.additionalIndicator } : {}]}
          actions={
            <ActionPanel>
              <Action.Paste content={item.indicator} />
              <Action.CopyToClipboard content={item.indicator} />
              {item.externalURL ? (
                <Action.OpenInBrowser url={item.externalURL} title={`Read More About '${item.meaning}'`} />
              ) : null}
              <Action.OpenInBrowser url={`https://tonetags.carrd.co/#intro`} title="Read More About Indicators" />
            </ActionPanel>
          }
          detail={
            <List.Item.Detail
              markdown={`
## \`${item.indicator}\` : ${item.meaning}
${item.example ? `> *"${item.example}"*\n\n---\n\n` : ""}
${item.explanation ? `${item.explanation}` : ""}
              `}
              metadata={
                <List.Item.Detail.Metadata>
                  <List.Item.Detail.Metadata.TagList title="Indicators">
                    <List.Item.Detail.Metadata.TagList.Item text={item.indicator} color={"#eed535"} />
                    {item.additionalIndicator ? (
                      <List.Item.Detail.Metadata.TagList.Item text={item.additionalIndicator} color={"#eed535"} />
                    ) : null}
                  </List.Item.Detail.Metadata.TagList>
                  {item.externalURL ? (
                    <List.Item.Detail.Metadata.Link
                      title={`Read More About '${item.meaning}'`}
                      target={item.externalURL}
                      text="More Information"
                    />
                  ) : null}
                </List.Item.Detail.Metadata>
              }
            />
          }
        />
      ))}
    </List>
  );
}
