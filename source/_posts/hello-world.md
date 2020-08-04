---
title: Test
subtitle: Yes, another test (I'm sorry)
author: Ben
tags:
- tag1
- tag2
- tag3
categories:
- cat1
- cat2
- cat3
---

So this is a blog post. More specifically this is a blog post to test the design of this Hexo theme I am designing. It is called nebula (becauase space is cool, and my name backwards is ```neb```,
so that's cool. My name is Ben).

<!-- more -->

# yo 
## just
### testing
#### testing again
##### and some more

# Look here
I wrote some code

## Some java also
{% codeblock HelloWorld.java lang:java https://github.com/helloworld.java github.com/hello-world %}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world"); // say "Hello, world"
    }
}
{% endcodeblock %}

## this is a another code snippet, this time javascript
Here is how I added copy functionality to these code snippets
{% codeblock lang:javascript copy.js %}
function copy(pos) {
    // Create a hidden text area to inject our text into
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    // Insert the text from the code block we want to copy into the textarea
    textarea.value = highlightedBlocks[pos].querySelector("td.code").innerText;
    // copy
    textarea.select();
    document.execCommand("COPY");
    // Remove 
    document.body.removeChild(textarea);
}
{% endcodeblock %}

## Here is a line of code without a name or url provided (the copy button should be located at the bottom this time)
{%codeblock lang:bash install_grunt.sh %}
# Install grunt
npm install grunt-cli -g
.\grunt.sh
{% endcodeblock %}

## Here is a block quote
{% blockquote -Ben Franklin https://www.benfranklin.com benfranklin.com %}
This is a quote
{% endblockquote %}

## Here is ...
All the features this blog has
1. comments
2. highlighted code
3. copy code to clipboard

## Notes
1. for highlighting to work correctly, keep it enabled in _config, do not download from hljs's website

## here is an image
