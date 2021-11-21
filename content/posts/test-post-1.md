---
template: post
slug: testpost
draft: false
socialImage: "/media/tda-images/dens.svg"
title: Test Post
date: 2021-11-20T20:47:11Z
description: A test post to try out
category: tda
tags:
- test

---
This is a test post. A gif is inserted below.

![](/media/tda-images/thermodynamic.gif)

Some math below $\\alpha$

$$

y = mx + c

$$

> This is a block quote

***

And this is a codeblock in Julia

    using Arrays
    x = 1:0.1:2
    y = x^2
    plot(x, y)

***

This is a Python code block:

    import numpy
    import matplotlib.pyplot as plt
    
    x = np.array([1,2,3])
    y = [u**2 for u in x]
    
    plt.plot(x,y)
    plt.show()

***

This is an R code block:

>     library(tidyverse)
>     
>     x <- c(1:10)
>     y <- x^2
>     
>     plot(x, y, type="l", col="red")

***