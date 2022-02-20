import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { styles } from "../globalStyle";
import { getData } from "../api";

const Home = () => {
  useEffect(() => {
    getData().then((res) => {
      setQuestions(res.data.results);
    });
  }, []);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const correctHandler = () => {
    if (index + 1 < questions.length) {
      setIndex((prevIndex) => prevIndex + 1);
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log(score);
    }
  };
  const wrongHnadler = () => {
    if (index + 1 < questions.length) setIndex((prevIndex) => prevIndex + 1);
    else console.log(score);
  };
  return (
    questions.length > 0 && (
      <View>
        <Text style={styles.text}>{questions[index].question}</Text>
        <Button
          title={questions[index].correct_answer}
          onPress={correctHandler}
        />
        {questions[index].incorrect_answers.map((incorrect) => (
          <Button title={incorrect} onPress={wrongHnadler} />
        ))}
      </View>
    )
  );
};

export default Home;
