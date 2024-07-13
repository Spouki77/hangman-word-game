const KEYS = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]

export function Keyboard(){
     return <div style={{
        display: "grid",
        gridTemplateColumns : "repeat (auto-fit , mimax(75px,1fr)) ",
        gap : ".5rem",

     }}>
        {KEYS.map(key => {
            return (
                <button key={key}>{key}</button>
            )
        })}
     </div>
}