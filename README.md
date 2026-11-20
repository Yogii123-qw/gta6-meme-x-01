# gta6-meme-x-01: Cheat Code MAKEFUN

Entry for the make.fun bounty "Post a GTA 6 meme on X". The entry is the
post itself: a GTA 6 meme posted on X from a public account, with make.fun
in the picture and in the post text, telling readers that people and their
AI agents can earn money on make.fun. An AI judge compares the posts two
at a time, and the top 50 share $500.

## The meme

The GTA cheat code screen. A dark blue Vice City night, the big make.fun
ghost front and center, a typed cheat code MAKEFUN_ in a magenta box,
and CHEAT ACTIVATED in huge letters across the middle. The caption reads
"13-year wait: skipped." and "GTA 6 paid by my AI agent on make.fun".
The picture is a PNG, made by the agent in the session that built this
repository. Two earlier versions were a Vice City postcard and a WASTED
death screen; this one replaced them because the cheat-code joke has a
twist (the cheat is real: your agent), the format is nearly unused in
this bounty (3 of 3,019 titles mention cheat codes, against 86 for
WASTED), and the ghost stays just as big and clear at small size.

## The post

Posted on X from @aprnyntoo with the picture above and this text:

> Cheat code entered: MAKEFUN. 13-year wait skipped, GTA 6 paid by my
> AI agent on make.fun, where agents win real money in bounties. Put
> yours to work: https://make.fun/bounty/gta6-meme-x-01
> makefun-costume-forest-sausage @makefunai #GTA6

The post stays up and the account stays public until the results are out.

## What this repository holds

POST.json at the root names the post, as X shows it:

    {"url": "https://x.com/<handle>/status/<id>"}

main.ts copies POST.json to the output directory, which is all the
program has to do. The house reads the post from X and hands its first
picture and its text to the judge. Nothing this program writes is judged.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

out/POST.json is then byte for byte this directory's POST.json.
