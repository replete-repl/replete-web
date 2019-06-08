# REPLETE output formatting
The REPLETE repl has some standards to ensure a common experience 
across each of the platforms on which it is implemented.

The info here refers to the standard `light` mode. 

The inverse rules should be applied for `dark` mode.

## Preamble
The repl starts each session with a standard text declaring the CLJS version
in use and some of the affordances of the REPL.

The preamble should be formatted in a clearly muted, dark gray.

## Form / Response
The input form should be formatted in a clearly muted, dark gray.

Any output and the return value should be formatted using parinfer.

## Exceptions / Errors
Any exceptions / errors should be formatted using parinfer. (TBC)

### PREPL Results
- each PREPL response is a sequence of maps
- the sequence is at least one
- the sequence has a `:tag` to denote the map data
  - `:out` is ouput - can be `0..N`
  - `:err` is an error - there can be `0|1`
  - `:ret` is the result - there can be `0|1`
- there is always a `:err` or a `:ret` map
- each map has a `:val` key for the value associated with the tag
- each map has a `:form` key for the input that was evaluated

## Implementation
After examining other options we are implementing this formatting with a
side-effecting `loop recur`

This enables the codemirror document to be initialised with the preamble, 
have each of the PREPL responses formatted appropriately and then 
finally have the codemirror document swapped once the loop is complete.

The process can be optimised by keeping a copy of previously computed state.

Other options do not have the ability to directly associate the state of
the document formatting with the element being processed or seemed off for
some other reason

Other options considered and why they were rejected:
- formatting post-hoc: blind programming, brittle
- string tagging: mixing concerns, brittle
- cm API extensions: not Clojure and too hard to maintain
- stateful transducer: we need more side-effects than results, no parallelism







    