/**
 * Loaded-language word set.
 *
 * Source: Ejhfast/empath-client, empath/data/categories.tsv
 * https://github.com/Ejhfast/empath-client — MIT License
 *
 * Empath has ~200 categories; most are topical (e.g. "farming", "money")
 * and say nothing about whether language is *loaded*. These 10 are the
 * ones that specifically carry rhetorical charge — words that editorialize
 * rather than describe:
 *
 *   aggression, violence, hate, anger, rage, disgust, ridicule,
 *   swearing_terms, exasperation, irritability
 *
 * Reproduced verbatim (word lists, not prose) under Empath's MIT license.
 * Deliberately NOT included: Empath's purely topical categories (crime,
 * money, medical_emergency, etc.) — those tell you what an article is
 * about, not whether it's loaded.
 */

const AGGRESSION = "cockiness infuriate violent kill lethal aggressive overconfident aggression provocation spite territorial betray outrage masculinity murderous hostility agitated intimidation livid snarl fearsome belittle resentment feral brutality confront fearful predatory force aggressor unfazed malice retaliation intensity demeaning confrontational fear savage infuriated ruthless defend barbaric volatile intimidated dominate outburst ferocious assertive threatened endanger bravado defiance menacing strong undermine hostile violence brutal audacity threat sadistic hatred unrelenting belligerent insult ruthlessness angry intimidating threatening brute fight overpower attack quash threaten ferocity suppress cruelty warn maim hateful harshness rage intimidate dangerous irate brazen temper vengeful aggressiveness anger provoke contempt offend harsh authoritative meanness malicious harass defiant angered brash bloodthirsty vicious furious domineering resentful intent ruthlessly fierce animosity destructive wildness seething deadly menace incite";

const VIOLENCE = "scratch bruise violent kill strangle impact death senseless stabbing kick hurting hit beat suffering angry bad mean harm bleeding scared dead inflict bruising wreck trauma beating bully punch aggravate struggle harshly bleed bash violence tough feel injures bloody punching resuscitate injure fight dislocated threaten injury cut minor abusing punish hurt sting wince fatal toughen painful slap torment damaged afraid scarring wound damage rape abuse stab mad shatters severe agony wounded";

const HATE = "despise vindictive infuriate sexist kill hating hate envy unkind hated degrading unhappy betray disgust dislike insensitive worse disrespectful taunt resent loath suffering belittle awful nasty rant mistrust idiotic ignore bad selfishness miserable loathing horrid seriously horrible scorn bully pathetic blame scum detest frustrate disrespect ashamed ridicule despicable repulsive hatred betrayed emotion resentment accusation distrust unhappiness worthless despised humiliation angry racism irritate insult spat hurtful betrayal cruelty degrade hateful negativity humiliate terrible rejection rage cruel guilt unfairness venomous feeling frustrating vengeful disgusting heartless anger annoying loathe selfish jealously discriminate harsh meanness contempt rude bullying mad jealous animosity murderous hypocrite unreasonable judgmental offend";

const ANGER = "unbridled infuriate disinterest underlying contorted fear exasperation aggression envy spite stubbornness disgust outrage indignation indignant murderous hostility condemnation suffering revulsion ruthlessness mistrust indescribable aggravation overwhelm malice yearning intensity displeasure irritation loathing irritability distaste disbelief infuriated distrust scorn turmoil pained sneer impatience disdain enmity disappointment hatred emotion madness defiance resentment sneering cynicism unhappiness annoyance wrath jealousy outright frustration ferocity dismay uncontrollable suppress twinge cruelty hateful harshness rage bitterness sadness spat unfairness unrelenting agitation fury flaring shame aggressiveness anger anguish contempt loathe agony meanness defiant angered pain mockery betrayal frustrate seriousness unspeakable palpable animosity seething scowl furious menace";

const RAGE = "discontent spat unbridled enraged infuriate visceral aggression pent spite disgust outrage indignation murderous hostility intimidation livid snarl fearsome uncontrolled lunacy revulsion ruthlessness sneer mistrust repressed malice potent intensity displeasure irritation savage loathing hysteria vehement venom hiss ferocious annoyance menacing unrestrained reproach disdain roar flare hatred emotion unrelenting madness angrily resentment accusation devastation wrath angry torrent dissipate fiery threaten ferocity bitter onslaught uncontrollable frustration twinge cruelty terror hateful darken savagery brutality rampage rage bitterness irate enmity boil venomous temper implacable agitation fury snarling fiercely aggressiveness anger anguish contempt growl fuming desperation angered mockery betrayal vicious bravado boiling vengeance fierce animosity vengeful viciously ablaze seething unleash furious menace";

const DISGUST = "discontent unbridled vile weariness uneasiness fear spite disgust indignation indignant condemnation loath repulsive belittle revulsion rage mistrust aggravation feigned grimace repressed deplorable humiliation malice displeasure selfishness loathing distaste disbelief vehement distrust scorn repugnant devastation confusion sorrow unease detest defiance sneer greed reproach pity disdain enmity discomfort disappointment misery emotion madness inexplicable resentment accusation sneering unhappiness annoyance disapproval unpleasant dismay chagrin condescension twinge outrage hateful rudeness abject utmost evident shame bitterness aversion dissatisfaction agitation irritation anger contempt loathe meanness malicious ugliness hostility scowl mockery betrayal disgusted palpable animosity hatred apathy loathsome seething menace appalled contemptuous shameful";

const RIDICULE = "ludicrous imitate spite scold degrading taunt sarcastic resent jibe belittle affront snide exaggerate contradict idiotic stupid cynical preposterous dumb demeaning insulting childish mockery jokingly disprove hilarious scorn silly cynically insulted disgraceful hypocritical humiliating detest laughable unbecoming tease joke ridicule foolishness audacity retarded cynic mortified humor cowardly vulgarity teasing laugh comeback wimp comical petty irritate insult derision blatant bitterly hurtful hypocrite appalled humiliate annoy judgmental silliness outrageous offended embarrassing disapprove weirdness jest ironic obnoxious blatantly provoke stupidity amusing mock rude scoff amuse retort absurd offend";

const SWEARING_TERMS = "hell nasty bad whore curse screwed ass disrespectful swear bitch crap damn bull damned fuck shit bastard hoe moron rude mad retard";

const EXASPERATION = "weariness outraged tirade aggravate disgust noncommittal disagreement dejected sternly aggravation overreaction exasperated irate irritation loathing disbelief angered exasperation anguished relent frustrated pent hopelessness wearily harshly surrender uncertainty despair disappointment defeat irked emotion hatred petulant irritate unhappiness annoyance jealousy disapproval derision frustration bitterly tantrum impatiently indignation displeasure agitation flaring fuming desperation groaning grudgingly irritated scowl furiously displeased frustrate impatient agony furious annoyed";

const IRRITABILITY = "laziness irritable aggression aggravate snappy indignation noncommittal complaint harshness cranky aggravation unsatisfied disapproving exasperated aggravated displeasure irritation loathing irritated irritability distaste dismissive unhelpful frustrated disgruntled grumble ignorance sullen infuriating exasperating irked perturbed vexed belligerent irritate cynicism annoyance impatience unimpressed disapproval irritating frustration dissatisfied pessimism boredom rudeness annoy irate temper dissatisfaction stubborn grouchy agitation anger condescension angered agitated aggravating displeased frustrate discomfort whining palpable hatred stress impatient seething scowl grumpy annoyed";

const RAW_CATEGORIES = [
  AGGRESSION, VIOLENCE, HATE, ANGER, RAGE,
  DISGUST, RIDICULE, SWEARING_TERMS, EXASPERATION, IRRITABILITY,
];

export const LOADED_WORDS: ReadonlySet<string> = new Set(
  RAW_CATEGORIES.flatMap((list) => list.split(" "))
);