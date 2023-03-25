# DBTL-List-Reveal
A one-page app to reveal list items, incorporating graphics and logic that allows several actions to occur with one click of the mouse.

# 'Don't Bury The Lead'
I made this app for the pro wrestling podcast I do with my friend.  It's called "Don't Bury The Lead" (https://www.youtube.com/@DontBuryTheLead/featured) because we like to get right to the top story when we recap a show or preview a big event.  We don't engage in the fake suspense of starting with the uninteresting stuff and making people wait around for the top news!

Our WrestleMania 39 preview show was set for a week before the big event, which would take place on April 1st & 2nd, 2023.  On March 24, we livestreamed our preview show here:  https://www.youtube.com/watch?v=w9yvfg_BGdY .  We wanted to reveal our Top 5 matches that we wanted to see, but couldn't find any free list-reveal apps that were suitable for our purposes and easy to use and customize.

So, I tried my hand at coding one!  Here it is!

This is a Vite app using React and lots of CSS.  Most of the code is in ListModular.jsx.  Using two .js files for our respective lists allowed my friend and I to make our Top 5 selections without the other person knowing them ahead of time.  We each made our picks in the dataDom.js and dataJohn.js files, which then exported our selections as innocuos variables to the ListModular component.

# How To Use It

Now for the real fun!

If you do an . . .

npm run dev

. . . from the project folder, the app will launch in a localhost port.  The app works best when it's in full-screen mode in a 16:9 aspect ratio, though it also works as narrow as 12:9 (4:3), or as wide as 18:9 (2:1)

The one-page app begins with the headline text on top and bottom.  The top is cenetered (because of a spotlight graphic that will apear later), while the bottom is flush left to accomodate the picture-in-picture in the lower right corner for the livestream videoconferencing platform (we used Restream).

1. From the opening screen, click the large logo in the center.  This will replace that large logo with the ListModular component containing both lists, the spotlight graphic and a staging area in the center that will house the dominant photo/image on the page.

The five list tems in each list should appear as plain rectangles.  All list items begin in "hide" mode, with the text invisible (it's there, but it's the same color as the background).

2. If you click on a list item that's in "hide" mode:

    a. The text in that list item will become visible ("unhide" mode).

    b. The photo/image associated with that list item will appear in the center.

    c. This list item will be the "active" item and will appear larger.

        i. If a list item in "unhide" mode in the opposite list matches the active item, then each list item will appear larger.

        ii. All other "unhide" list items will be considered "inactive" and will change to standard size while remaining in "unhide" mode.

3. If you click on a list item that's in "unhide" mode:

    a. The list item reverts to its initial state of "hide" mode.

    b. The photo/image disappears, and this portion of the component reverts to its initial state (blank/"undefined").

    c. If this list item was also the "active" item, then no item will be considered "active."

4. If you click on the photo/image in the center of the component:

    a. The photo/image disappears, and this portion of the component reverts to its initial state (blank/"undefined").

    b. Any "active" list item will be considered "inactive" and will change to standard size while remaining in "unhide" mode.

Several actions happen with one click, which makes it simpler to use, I think.  And it's a fun way to do a list reveal!

# This Is My First App . . .

. . . that I built from scratch without copying a tutorial of some sort.  I didn't know if I could do this, until I did.  I'm proud of this build-from-scratch app, and I hope you like it, too!

--Dom
