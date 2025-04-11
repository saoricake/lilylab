---
title: "31st March, Midnight: Disassembling the Furniture"
author: Lacunova

oldUrl: /blog/2024-10-25-31st-March-Midnight-Disassembling-the-Furniture.html
---

<figure class="image">
  <img src="/blog/img/7_img1.png" alt="">
</figure>

Hello everyone. This post is an attempt to unpack some of the process of making our first (complete) work under the Prof Lily name, [<cite>31st March, Midnight</cite>](https://proflilyvn.itch.io/31st){rel=external target=_blank} (hereon referred to as <cite>31st</cite>), from the perspective of Len, Lenore, Lacunova—yours truly. In this post I'll talk predominantly about the parts of development that I handled, which is much of the coding, 3D art and user interface design. Note that this game was developed on-and-off for around three years, so there's a lot of ground for me to cover.

This piece has been coming for a long time, initially being something I wanted to write in the weeks after 31st first released. I've found myself spurred on to finally write it this month as I try to get a little better at documenting my work instead of just shrugging and pointing to where to download it. Besides reasons like my personal self-improvement, I also think it's good for developers to have as much of the development process out in the open as possible, when it's possible. Particularly just for those tiny little things that might catch your eye when you're playing a game, that you might perhaps want to use in your own work. For instance, want to know what fonts we've been using? You can, because that's the first thing I'm going to talk about :)

## Fonts

<figure class="image">
  <img src="/blog/img/7_img2.png" alt="">
</figure>

<cite>31st's</cite> logo never changed much from its first incarnation - it was conceived as a serif title with decorative text underneath, and never strayed from this initial design brief. The title font in question is [Nanum Myeongjo](https://en.sandoll.co.kr/){rel=external target=_blank} with a tagline written in Yuji Syuku Regular from [Kinuta Font Factory](https://github.com/Kinutafontfactory/Yuji){rel=external target=_blank}, both available via Google Fonts.

<figure class="image">
  <img src="/blog/img/7_img3.png" alt="">
</figure>

We included some decorative text in our logo just as an extra point of visual interest. A snippet of text that isn't really the focus of the image, but gives you just enough of an idea of what we're about if you were to actually sit down to read it, as well as encompassing the hook of <cite>31st</cite>.

This choice is a nod to the promotional materials for <cite>Sonic 3</cite> and a little book that I bought recently - Nagaoka Kenzou's artbook chronicling the [<cite>Hacchake Ayayo-san</cite>](https://ja.wikipedia.org/wiki/%E3%81%AF%E3%81%A3%E3%81%A1%E3%82%83%E3%81%91%E3%81%82%E3%82%84%E3%82%88%E3%81%95%E3%82%93){rel=external target=_blank} series for PC98, <cite>Ayayo's Love Afflatus</cite>. Nagaoka Kenzou is a great inspiration of mine, as he is both an accomplished bishoujo illustrator with a knack for three-dimensional shading, and an impeccable UI and visual designer... [And the text written on the front of this art book is amazing.](https://youtu.be/FZRzSuZABXI?si=kMrhE8rEpqQyrTFk&t=252){rel=external target=_blank} It fascinated me before I had even played the <cite>Hacchake Ayayo-san</cite> games. I love it so much. Well, long story short, we made an effort to appeal to retro sensibilities here.

Now, I'm a stickler about a good clean font to begin with, but I find that choosing a font for the body of your work is always the biggest challenge for me. Like, title fonts still need to be readable, but it feels more permissible to pick one with some extra frills as you're going for all-out impact. It also feels easier to ascertain whether or not a title font "clicks" quickly, as you're only looking at a few words in a logo.

With dialogue on the other hand, readers will be spending a lot of their time with whichever font you pick, so it's even more important to get it right and pick something that won't strain anybody's eyes. The default font used for text in <cite>31st</cite> is [IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif/about){rel=external target=_blank}, a serif font available via Google Fonts. This was chosen mostly because the two serif fonts used in the logo are a little too unorthodox to use in the body of the script, and this one appears to read fairly well at any size.

As for your other font options, <cite>31st</cite> also sees the return of <cite>GFT's</cite> sans-serif [BPreplay](https://backpacker.gr/){rel=external target=_blank} font, but also swaps out OpenDyslexic in favour of [Lexend](https://www.lexend.com/){rel=external target=_blank}, another font designed with dyslexic readers in mind. Both are available to swap between in the settings menu. I fell in love with Lexend's clarity and modernity at first sight, but obviously any quibbling we do about fonts here comes with the caveat that to my knowledge, nobody under Prof. Lily is dyslexic. If you have strong feelings about how to improve the readability of our games then please leave me a comment or message, I'd like to hear them.

## UI

<figure class="image">
  <img src="/blog/img/7_img4.png" alt="">
</figure>

Now we move onto some of <cite>31st's</cite> other visual design choices. <cite>31st's</cite> title screen uses a heavily filtered version of [this photo from Pexels](https://www.pexels.com/photo/office-buildings-during-night-time-3716558/){rel=external target=_blank}. Kastel was first to suggest a zoomed out view of an office building, looking in from the outside, and I selected the specific photo. This is imagery that clicked pretty quickly for me. However, I never even knew its source until last week, when I came across the book [<cite>The Problem with Work</cite>](https://www.dukeupress.edu/the-problem-with-work){rel=external target=_blank} by Kathi Weeks at a local bookstore. It's an anti-work book that questions the place of work in our lives, using Marxist and feminist theory to aid in this dismantlement. I commented on how funny it is that its cover looks so much like <cite>31st's</cite> main visual, when the two also have themes in common. Kastel seems to think it's a book cover that might have subconsciously lodged itself into their mind.

I note that while <cite>GFT's</cite> visuals feature an analog stationery motif (paperclips, lined paper, little scribbly lines here and there...), <cite>31st</cite> draws faintly on screenplays in its style. Our usage of serif fonts is meant to complement this. Visually, I feel that 31st is a little simpler than <cite>GFT</cite>, but I don't think that's a bad thing. The UI palette is restricted to a blue monochrome. This was inspired, again, by the various colourful menus added to the <cite>Hacchake Ayayo-san</cite> Windows ports, as done by [Repadars](https://repadars.org/){rel=external target=_blank}. It's just a little something that really charmed me when I played through the games - they are faithfully retro in style, filled with little secret buttons and animations, and complement the games themselves nicely. So I thought about emulating something retro for our game, too.

<figure class="image">
  <img src="/blog/img/7_img5.png" alt="">
</figure>

<cite>GFT</cite> and <cite>31st</cite> use an unconventional horizontal textbox that's more like a hybrid between ADV and NVL than anything else. When we began drafting a UI for <cite>GFT</cite>, Kastel was the one to suggest this style of textbox. They provided the example of the textbox used in the Nitroplus work <cite>Soukou Akki Muramasa</cite> - this is specific to the English language release of the game, and is a decision which was in turn inspired by <cite>Disco Elysium's</cite> textbox. I didn't know that last part until a few seconds ago, even.

<cite>31st</cite> swaps out <cite>GFT's</cite> character-specific speech bubbles for a play script format. This was... bizarrely annoying to implement, and is kind of held together by string. There's a script in 31st which appends "(Character name):" to the start of each line depending on whether it's being said by an "actor" or just narrated. Perhaps some secrets are better kept in the dark.

## 3D and CG

<figure class="image">
  <img src="/blog/img/7_img6.png" alt="">
</figure>

I'm blessed enough to be able to brag that, barring the title screen, I made every background image present in <cite>31st</cite>. The main office space of Lazula, makers of <cite>Rubium</cite>, was one of the first scenes I made. It was my challenge to capture the insincere friendliness of the studio as accurately as possible, painting the walls with deceptively warm colours and accessorising the room with little quirky flourishes. During this process, I took most of my notes from a moodboard filled with images of big open-plan offices. Mural walls and beanbags are both very popular choices, seemingly.

The reason why Lazula is named as such is because Kastel forgot how to spell Lazuli. I believe the reason the studio even has a name is because I wanted to plaster it across a wall in the office somewhere. So, <cite>Rubium</cite> kind of naturally followed as a name for the game they are most known for. We even wrote a couple of snippets of lore for the game, but it's probably best to think of it as something like a Fire Emblem clone.

<figure class="image">
  <img src="/blog/img/7_img7.png" alt="">
</figure>

Above are some posters I sketched up in Canva to quickly populate the walls of the office, filled with inane nonsense about wellness and eating lunch. There are many individual posters and photographs hidden around the office, and there's even a stupidly detailed coat rack hidden in an area that never made it into any of the renders...

One odd observation I've made as I build scenes like these is that sticky notes are one of my most used props - they are a small and simple item that allow scenes to feel more lived in when placed freely around the walls and desks, like the leftovers of a long brainstorming session. You really get the feeling that real people are getting their labour exploited inside the environment you're building.

Another little tip that I find equally conducive to making real, breathing scenes is rotating furniture very slightly on its Z axis here and there - let's say by about five degrees - in either direction. This helps break up the uniformity of the furniture placement within a scene, and makes things feel a little more organic.

It was also during the making of the office that I stumbled across one of the most fascinatingly simple Blender tutorials I've ever seen - did you know that you can [effectively model a beanbag chair](https://www.youtube.com/watch?v=z274Aa_fZtw){rel=external target=_blank} with a sphere, a cloth modifier and a simple physics simulation?

<figure class="image">
  <img src="/blog/img/7_img8.png" alt="">
</figure>

What do you imagine when you hear the word "supermarket"? I initially modelled the mart that Amy used to work in as... a white person supermarket, in Kastel's words. I actually worked in a supermarket part-time for eight years of my life, so this is largely what this scene was previously based on, lol.

I realised later on in the process of making <cite>31st's</cite> environments that the 'mart' of the script actually referred to a little grocers owned by Amy's parents, and knew that this environment needed quite a bit of an overhaul. I set to sizing things down, and depopulating the shelves a little bit. The previous radioactive green colour scheme was out, and signs were given a makeover.

<figure class="image">
  <img src="/blog/img/7_img9.png" alt="">
</figure>

This visual update included designing tea packaging for the shelves and looking up the appropriate Chinese characters for 'lemon tea', and other such tasty things. Please, for the love of god don't try to read the smaller text on those designs above, it's just lorem ipsum.

<figure class="image">
  <img src="/blog/img/7_img10.png" alt="">
</figure>

Here's also a great time to admit that Amy's dorm room is entirely based on my own at University! This is partially because of how challenging it was to find stock photos that accurately represented the chaos and clutter of a student dorm room, as well as the typical size of such a room. Many of her odd trinkets are also mine, such as the strange wide-mouthed cat ornament that sits on the corner of her desk (I used to put candy in there to eat while studying). I have added a few changes and palette swaps, just to make sure that I didn't completely lose my sense of self. For instance, there is a small poster for Andrei Tarkovsky's <cite>Stalker</cite> on her wall, which is not something I own in real life.

<figure class="image">
  <img src="/blog/img/7_img11.png" alt="">
</figure>

Though their names have been smudged up and changed around a little bit, the books on Amy's shelf were all crowdsourced from the rest of the team, including Polybius' <cite>Histories</cite>, <cite>Health Communism</cite>, <cite>Revolting Prostitutes</cite> and <cite>The Master and Margarita</cite>. Amy also has a small poster of a Kandinsky painting on her desk, and a little doodle of my character Meade that I drew once.

<figure class="image">
  <img src="/blog/img/7_img12.png" alt="">
</figure>

As for the final image in <cite>31st,</cite> that was drawn by Curry. Kastel provided the beautiful first draft on the left in the above image. I have a sneaking intuition that <cite>31st</cite> didn't get quite as many downloads as <cite>GFT</cite> because we didn't slap an anime girl on its itch.io banner, even though there is also an anime girl in this game. You just have to dig a bit harder to find her. To some extent I do understand if that's the case, because much of my web browsing is driven by my need to look at pictures of anime girls. It's something to note if we make a third game, I suppose.

Since finishing the game, <cite>31st's</cite> 3D assets have been recycled quite a bit when I've been creating other scenes in Blender - I never quite understood just how useful a worryingly-detailed model of a laptop or a spinny office chair could be to have lying around in my files. Such is the utility of office furniture, I guess.

## Scripting

Since early on in <cite>GFT's</cite> development, we've been using the [Naninovel](https://naninovel.com/){rel=external target=_blank} plugin for Unity to make our visual novels. I frequently get asked why we would choose Unity over an engine made with visual novels specifically in mind, such as [Ren'Py](https://renpy.org){rel=external target=_blank}. To be specific, I don't click so well with the way Ren'Py handles graphics, and it doesn't always gel so well with my approach to user interfaces. Besides that, I think that Unity has better support for porting games to different programs. Ren'Py is a platform I've used in the past for small personal projects, but wished to branch out from for Prof. Lily's projects.

It was admittedly a hunt to find another up-to-date engine with any kind of pre-existing framework for dialogue that was also *visual novel friendly*, as the two seemed to be conflated in many places - I came across a lot of good looking visual novel plugins around the web that didn't quite have built in save functionality yet.

While we do utilise much of Naninovel's vanilla setup, <cite>GFT</cite> and <cite>31st</cite> also have some unique scripts that I built to customise the system to our preferences - the games' text-hooking feature for in-game dialogue and menu text, <cite>GFT's</cite> content warning prompts, and the adjustable transparency of the main dialogue window. The pop-ups you see for image descriptions and audio descriptions are also hand-built, though those were not too difficult - 'IMG', 'SFX' and 'BGM' are all listed as individual "actors" in the games' scripts, alongside actual speaking characters who have their own distinct text boxes.

In the future, I do think it's very likely that we may move to a different engine. I'm slowly teaching myself Godot at the moment. While Unity seemed like the best fit for us back in 2020, obviously the world around us continues to change (sometimes for the worse). I'm hoping that other spaces might serve as better grounds to build a visual novel upon in the future.

## Audio

Eventually the time also came to add audio to the game. Outside of the music that plays while Amy is playing <cite>8rats</cite>, I believe there are only two other music tracks, both from [Dova Syndrome](https://dova-s.jp/EN/){rel=external target=_blank}. Dova Syndrome is a website and YouTube channel with a wide music library that also operates as a portfolio for its associated composers. Though I would advise inspecting the individual licensing permissions for each track (for instance, many cannot be modified), many of these songs can be used to soundtrack videos and games for free. I'm sure that in recent years, the VTuber boom has helped Dova's notoriety here catch up with what it has always been for Japanese creators, but they remain an incredibly useful channel hosting many tunes for developers to peruse and possibly use.

The <cite>8rats</cite> portion of the game includes more music from other royalty-free creators, like SENTIVE, TAM, and Rengoku Teien. These are here thanks to a Eureka moment I had in conversation with Kastel - if <cite>Hatoful Boyfriend's</cite> tracks are all royalty-free, then why don't we just use some of those and further the allusion we're already making to it? I think a track like DEATH TONE is already pretty engraved into me from Yuuya and the BBL route, so the least I can do is bring other <cite>Hatoful</cite> players back to our special shared misery in a completely different game.

A lot of tracks from the [Homemade Garbage channel](https://www.youtube.com/@hmgst){rel=external target=_blank} were used in <cite>GFT's</cite> demo, including most recognisably [the main menu theme](https://www.youtube.com/watch?v=CieDzb2wRSI){rel=external target=_blank}. I recognise none of these songs appear in <cite>31st</cite>, but since I'm talking about <cite>31st</cite> first, I'd like to take a moment to link to them and praise the quality music they upload on their channel. Worth a click.

<cite>31st's</cite> sound effects are from [all corners of the web](https://proflily.games/txt/31st/credits.txt){rel=external target=_blank}. It's hard to describe how oddly infuriating it is to listen through dozens of sounds of rain dripping on a window, or a clock ticking, just looking for the *perfect* one that scratches your brain right. The hardest things to find of this variety were <cite>8rats'</cite> game-within-a-game startup jingle and UI sounds - the quest for a twinkle so perfectly evocative of a game made in 2007, something that could match up to the energy of its authentic soundtrack.

I'm unsure where it would make sense to put this, but at one point during development I briefly encountered a bug where all of <cite>31st's</cite> audio began playing at a distorted speed and pitch in the Unity editor.

<figure class="video">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/r03gNt4wEU4?si=y38YOWsd7KA75nLS"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
  <figcaption>(Excuse the grubby monitor.)</figcaption>
</figure>

Upon restarting my computer my machine had the gall to act like nothing ever happened, so we'll never know what that was about.

Before leaving this section I would also like to note that even Prof Lily's startup jingle consists of two [Freesound.org](https://freesound.org){rel=external target=_blank} contributions, merged together in Audacity. The power of royalty-free...

## Final thoughts

It would be impossible to go into just about everything that influenced the process of <cite>31st's</cite> development, but I've done my best to delve into my thoughts during and even after this process. Most of my attempts at writing don't really require this degree of self-reflection. There's a lot of little funny and mostly pointless anecdotes that wormed their way into this piece, to a point where I can't really tell what should and shouldn't be here. I hope something here was useful to you, or even just tickled you slightly.

<figure class="image">
  <img src="/blog/img/7_img13.png" alt="">
</figure>

<cite>31st</cite> is a story about bitter feelings that are too hard to swallow. The pain of being alienated from your labour. The pain of naivety and optimism festering into cynicism and distrust. <cite>GFT</cite> is also an "anti-work" work, and it's this theme that seems to propel much of our work forward. But this kind of gloomy sickness in our work always feels very potent to express, and I know that it's what makes a work feel like a 'Prof. Lily' work to me. I can't speak entirely for my team members, but I feel like whenever we discuss the works that we want to make and our creative decisions, I always have such a strong feeling of "This is what Prof. Lily would do!" and "This is what Prof. Lily should be", usually accompanied by some mischievous giggling or whatever. Prof. Lily almost feels like its own entity now, and we kinda just operate according to its will.

<figure class="image">
  <img src="/blog/img/7_img14.png" alt="">
</figure>

I know that the purity of expression I see in a work like <cite>31st</cite> is what made helping create it feel so worthwhile to me. Something spicy and bitter that feels a little too personal, like all Prof. Lily works should be. A real problem child. I'm a sicko who likes utsu stuff like Yasuzo Masumura movies that hurt their audience and offer up deeply unsatisfying conclusions, but I hope I could share a little bit of that pain with you when (if?) you played the game.

I don't know what's next for Prof. Lily, but I know it will be *something*, and I'm grateful as ever to be a part of that something!


