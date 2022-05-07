import React from 'react';
import { View, Text } from 'react-native';

import { Copyrights } from '../Copyrights';
import { Option } from '../Option';

import { FeedbackType } from '../Widget';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';

interface Props{
  onFeedbackTypechanged: (feedbackType: FeedbackType) => void;
}

export function Options({onFeedbackTypechanged}: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Deixe o seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes)
          .map(([key, value]) => (
            <Option
              onPress={() => onFeedbackTypechanged(key as FeedbackType)}
              key={key}
              title={value.title}
              image={value.image} 
            />
          ))
        }
      </View>

      <Copyrights />
    </View>
  );
}