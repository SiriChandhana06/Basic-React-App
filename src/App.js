import React from "react";
import Form from "./Component/Form";
import TodoApp from "./Component/Todolist";
import Counter from "./Component/counterapp";
import WeatherApp from "./Component/weather";
import Calculator from "./Component/calculator";
import NotesApp from "./Component/NotesApp";
import RecipeFinder from "./Component/RecipeFinder";
import ExpenseTracker from "./Component/ExpenseTracker";
import QuizApp from "./Component/QuizApp";

function App() {
  return (
    <div className="App">
      <Form/>
      <TodoApp/>
      <Counter/>
      <WeatherApp/>
      <Calculator/>
      <NotesApp/>
      <RecipeFinder/>
      <ExpenseTracker/>
      <QuizApp/>
    </div>
  );
}

export default App;
