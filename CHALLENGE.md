# Ramp Challenge

Thanks for applying to Ramp. Solve this CTF[1] challenge and add the result to your application.

We recommend opening this file with a Markdown viewer. (https://www.google.com/search?q=markdown+viewer)

## Instructions

1. Open this [link](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge)
2. Find a hidden URL within the HTML
   - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
   - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
   - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
   - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.

Pattern of the DOM tree for each valid character of the URL

```html
<section data-id="92*">
  <article data-class="*45">
    <div data-tag="*78*">
      <b class="ref" value="VALID_CHARACTER"></b>
    </div>
  </article>
</section>
```

(_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)

## Submission

Paste the flag you captured in step 2 in the job application

## Note on AI tools:

We know AI tools are great for coding, but for this challenge solve the problem on your own. The goal isn't just the final answer — it's to see your problem-solving and coding style. Feel free to use docs or references you'd normally use at work, but avoid pasting the whole challenge into AI tools.

**IMPORTANT: It is critical that your answer is provided in this format to ensure your submission is properly reviewed.**

\[1\]: https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)