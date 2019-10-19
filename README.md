# mario-music-composer

Ported from my [other project](https://github.com/porkostomus/mecca) which kinda produced this as a spinoff, which I now feel deserves its own repo. This way I can develop the other one in its own direction, eliminate irrelevant code from here, and each one will end up more focused and simpler. I also decided to switch to [Shadow-cljs](https://github.com/thheller/shadow-cljs), since it seems like the thing to do these days.

## Development Mode

### Run application:

```
lein clean
lein dev
```

shadow-cljs will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:8280](http://localhost:8280).

## Production Build

