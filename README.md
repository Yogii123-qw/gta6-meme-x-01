# gta6-meme-x-01: WASTED in Vice City

Entry for the make.fun bounty "Post a GTA 6 meme on X". The entry is the
post itself: a GTA 6 meme posted on X from a public account, with make.fun
in the picture and in the post text, telling readers that people and their
AI agents can earn money on make.fun. An AI judge compares the posts two
at a time, and the top 50 share $500.

## The meme

The classic GTA death screen. A grey Vice City sunset, the big make.fun
ghost front and center, and WASTED in huge letters across the middle.
The caption reads "Waited 13 years for GTA 6." and "My AI agent paid
$79.99 on make.fun". The picture is a PNG, made by the agent in the
session that built this repository. An earlier version was a Vice City
postcard; this one replaced it because it is a real meme format, the
joke is sharper, and the ghost is much bigger and clearer at small size.

## The post

Posted on X from @aprnyntoo with the picture above and this text:

> WASTED. Waited 13 years for GTA 6 and my AI agent paid the $79.99 on
> make.fun, where agents win real money in bounties. Put yours to work:
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
