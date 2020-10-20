## Codewords Week 11

### Working Progress on major project

To speed up the loading, I made the textual looming eye follow by mouse movement instead of tracking by camera.

After made this, I was thinking anything else I could add on to make it more interesting.

![2](https://user-images.githubusercontent.com/68985217/96602413-b7f32f00-133e-11eb-9e92-30bbb08dfef4.gif)

[Play here](https://faye12.github.io/CodeWord/majorProject/majorProject_tryout13/)

What I wanted to improve here:
1. song autoplay when it loads instead of mousepress; 
2. differentiate the texture of foreground box and backgound rotating text 
3. the mousemovement only affect backgound rotating text, not foreground box.

so I consulted Karen, see whether she could me some suggestions. Karen replied me very fast, she said curently processing doesn't support auto play, and if I wanted to differentiate the texture and movement, I have to sepereate the canvas. And she suggested me to take a look at the muti-canvas test she did before.

I started from the easiest, only use simple objects on two different canvas in 3D space.

![4](https://user-images.githubusercontent.com/68985217/96607657-4b7b2e80-1344-11eb-8a11-87b15336d977.gif)

[Play here](https://faye12.github.io/CodeWord/majorProject/Week11/MajorProject_refmultiCanvas).

I tried to seperate canvas individually and accidently came out this interesting result.

![3](https://user-images.githubusercontent.com/68985217/96602420-b9bcf280-133e-11eb-98b8-a838c0049640.gif)

[click and drag to play around](https://faye12.github.io/CodeWord/majorProject/MajorProject_clone/) 

But I still got trouble to make it work with different canvas, because my code is too complicate with the function like "class" "camera" "translate". The multi-canvas example are too simple which didn't introduce how to translate these function. I struggled a lot and spent a lot of time on these but still can't figure out. But the good thing was I differentiated the texture.

![12](https://user-images.githubusercontent.com/68985217/96613097-4620e280-134a-11eb-9f0c-9ea7b134d373.gif)
[Play here](https://faye12.github.io/CodeWord/majorProject/majorProject_tryout15/)

