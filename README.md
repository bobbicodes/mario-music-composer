## Start local development server:

I use [Figwheel Main](https://github.com/bhauman/figwheel-main) with the [Clojure CLI tools](https://clojure.org/reference/deps_and_cli). Audio samples are fetched with [core.async](https://github.com/clojure/core.async), and while the app generally follows the [re-frame](https://github.com/Day8/re-frame) pattern, it still does lots of yucky stuff like perform logic in views, side-effecting event handlers, etc. 

Oh and I'm still working on a proper note scheduling system. It currently just plays the entire song and there's no way to stop or adjust it once you press play...

```
clojure -A:fig -b dev -r
```

You'll need to change the line in `music.cljs` to point to the directory with the samples:

```
(defn load-samples []
  (go-loop [result {}
            sounds (range 1 27)]
    (if-not (nil? (first sounds))
      (let [sound (first sounds)
            decoded-buffer (<! (get-and-decode {:url (str "/audio/" sound ".mp3")
                                                :sound sound}))]
        (prn sound)
        (prn decoded-buffer)
        (recur (assoc result sound decoded-buffer)
               (rest sounds)))
      result)))
```

## Compile with advanced optimizations:

```
clj -m figwheel.main -O advanced -bo dev
```

Thanks to [Bruce Hauman](https://github.com/bhauman), [Chris Ford](https://github.com/ctford) and [Dave Yarwood](https://github.com/daveyarwood) for blazing the CLJS Web Audio trail. No way could I have figured this all out myself.
