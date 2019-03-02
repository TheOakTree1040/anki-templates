# Anki Card Templates
This is a repository for some of my [Anki](https://apps.ankiweb.net/) card templates. The original card template (by the author of [ODH](https://github.com/ninja33/ODH)) is from [here](http://www.laohuang.net/wp-content/uploads/2018/02/ODH.zip).
## How to Use
* Create a folder named `resrc` in `C:\Users\USERNAME\AppData\Roaming\Anki2\PROFILE\collection.media`.
* Download the repo and put in this folder. You can delete the templates that you don't want.
* Create a new note type in Anki (Note Types > Add > Choose whichever > OK), or use a pre-existing note type.
* Make sure the note type has the same fields as the ones in the template, or you can modify the code directly. (Note Types > Select note type > Fields... > Add/Delete/Rename)
* Paste the HTML from the card template folder into the corresponding widget in the Card Types window.  (Note Types > Select note type > Cards... > Paste)
* CSS
    * `@import` the corresponding css stylesheet in the Styles widget. Ex, `@import url(resrc/css/eng/base.css);`. (Doesn't seem to work in AnkiDroid)
    * Or, paste the dependencies such as `resrc/css/base.css` as seen in the `@import` statements into the Styling widget first. Remove any `@import` statements in the card template stylesheet, then paste it into the widget. Delete the whole `resrc` folder as you wish.