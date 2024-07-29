import styles from "../styles/Keyboard.module.css";

type KeyboardProps = {
  disabled?:boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
};

const KEYS = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];

function Keyboard({
  
  activeLetters,
  inactiveLetters,
  addGuessedLetters,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-10 gap-2 ">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetters(key)}
            className={`${styles.btn}${styles.isActive ? styles.active : ""}
          ${isInActive ? styles.inactive : ""}`}
            disabled={isInActive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
