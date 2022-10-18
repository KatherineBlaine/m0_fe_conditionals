# Self Evaluation

**1. How confident do you feel in your understanding and fluency with the comparison operators?**

I feel really good with comparison operators! The one mistake I was making a bit earlier that we identified in small groups yesterday was the difference between "=" and "===" It feels so natural to just put one equal sign because thats how I've used that symbol in the past, but it makes such a big difference! Ellen's explanation of "=" being an instruction and "===" being a question/evaluation has helped me correct that mistake but it will definitely take some getting used to.

**1. How confident do you feel in your understanding and fluency with the logical operators?**

I am completely comforable with using logical operators. It reminds me of equations I did in math classes throughout my life, and I have played around with using logical operators within other logical operators to make my code more concise.

**1. How confident do you feel in your understanding and fluency with the if statements?**

I feel really confident and have really enjoyed the exercises. 

**1. How much time did you spend on this lesson/topic? How did that line up with your time estimate?**

I set aside 2 hours for this assignment and it definitely took me more like 3. I always take a longer time when I have to record a loom because I get worried about little mistakes and how long my video is and re start recording so many times!

I also think going into my recording that it will be easy because I already practiced the exercise, but have found it to be so much more difficult to explain to someone else everything I'm doing and have had to stop recording and re evaluate multiple times!


**1. What do you still need to practice or learn? How will you do that? Do you need to adjust your calendar in order to do that?**

I feel really good about the content, but definitely need to keep practicing simple exercises to get myself used to the format and notation. I find myself missing little things like a closing bracket or using the assignment operator instead of the equality operator. So far, what I have done to spend a little more time on this is if I have time I will complete little portions of the exercise multiple times and I get faster and more accurate every time!


**1. What questions do you still have? How will you get the answers you need?**

One question I had was how you guys prefer the git commits to be organized. For me, it seemed logical to push up my work after each exercise, and I just wanted to see if there was a certain way that made it easier for evaluation or if its up to my preference?

As I discussed in my video, I ran into a technical problem with the challenge #3 activity. In my first attempt at the challenge, I wrote the following code:

```javascript

if (number % 3 === 0) {
    console.log("Fizz")
} else if (number % 5 === 0) {
    console.log("Buzz")
} else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz")
} else {
    console.log(`${number}`)
}
```
When I went to run this code in my terminal, I tried testing multiple numbers and predicting the results. When I assigned my number variable to 15, I predicted that it would print "FizzBuzz" because 15 is a multiple of both 3 and 5, but it printed "Fizz"

I realized the issue that my first 2 conditions did not exclude values that were multiples of BOTH 3 and 5, so I rewrote those conditions like this:

```javascript
var number = 106

if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Fizz")
} else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Buzz")
} else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz")
} else {
    console.log(`${number}`)
}
```

I am just wondering if there is a more efficient way to do this, or if this is the structure you were looking for?

This is definitely something I will bring up in our next small group session, and I can also look over my groups' loom videos to see if they used a different approach.
