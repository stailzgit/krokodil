import React from "react";
import GoToMain from "../../../Components/GoToMain/GoToMain";
import "./GameSpecifics.css";
type Props = {};

const GameSpecifics = (props: Props) => {
  return (
    <div className="specifics page-wrap">
      <h2 className="specifics__title page__title">Специфика игры</h2>
      <div className="specifics__body">
        <p>1) Игроки разделяются на команды или играют каждый сам за себя.</p>
        <p>2) Для игры командами достаточно двух команд.</p>
        <p>3) Для игры каждый сам за себя нужно минимум 3 игрока.</p>
        <p>4) Можно выбрать уровни сложности слов.</p>
        <p>
          5) Каждый ход дается на выбор 5 слов разных уровней сложности (если
          выбраны разные уровни).
        </p>
        <p>
          6) При игре командами слово показывает член команды и угадывать его
          может только команда.
        </p>
        <p>
          7) При игре каждый сам за себя - угадывают слово все. В этом режиме
          очки за отгаданное слово получит как показывающий, так и угадавший.
        </p>
        <p>
          8) Игра заканчивается, когда закончатся карты или когда наберется
          количество очков, указанное в настройках игры. При этом нужно
          завершить круг ходов. При достижении максимальных очков несколькими
          игроками - игра продолжается до тех пор, пока кто-то не вырвется
          вперед по итогам пройденного круга.
        </p>
      </div>

      <GoToMain />
    </div>
  );
};

export default GameSpecifics;
