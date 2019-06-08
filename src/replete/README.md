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
We parse the prepl-response for the input form parts and the output parts.

We append results to the CodeMirror instance and calculate the needed 
markup coordinates for the input form (start line, end line, width).

Appending the results requires us to call `.setValue` on the CodeMirror instance.

Whenever `.setValue` is called, the existing markup is removed

To countermeasure this we keep a history of markup coordinates and apply the markup 
after any calls to `.setValue`

Yes, managing state is annoying




