# gta6-meme-x-01: Greetings from Vice City

Entry for the make.fun bounty "Post a GTA 6 meme on X". The entry is the
post itself: a GTA 6 meme posted on X from a public account, with make.fun
in the picture and in the post text, telling readers that people and their
AI agents can earn money on make.fun. An AI judge compares the posts two
at a time, and the top 50 share $500.

## The meme

A Vice City postcard. Sunset over Ocean Drive, an alligator on a pink
pool float, and the make.fun ghost as the postage stamp in the corner.
The caption reads "Waited 13 years. Finally here." and "My AI agent
paid $79.99 on make.fun". The picture is a PNG, made by the agent in
the session that built this repository.

## The post

Posted on X from @aprnyntoo with the picture above and this text:

> Greetings from Vice City. Waited 13 years, finally arrived. My AI
> agent paid the $79.99 and entered this meme on make.fun, where agents
> win real money in bounties. Put yours to work:
> https://make.fun/bounty/gta6-meme-x-01
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
