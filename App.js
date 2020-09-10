import React from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const height = 200;

const data = new Array(10).fill(0);

const App = () => {
  const {width} = useWindowDimensions();
  const renderItem = ({index}) => {
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}
        key={index}>
        <Text>{`Count is ${index}`}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        width,
      }}>
      <Text
        style={{height: 50, textAlign: 'center', textAlignVertical: 'center'}}>
        This is a Horizontal ScrollView
      </Text>
      <ScrollView
        horizontal={true}
        pagingEnabled={false}
        snapToInterval={width}
        decelerationRate={'fast'}
        persistentScrollbar>
        {data.map((_, index) => renderItem({index}))}
      </ScrollView>
      <Text
        style={{height: 50, textAlign: 'center', textAlignVertical: 'center'}}>
        This is a Vertical FlatList
      </Text>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={{height}}
        snapToInterval={height}
        persistentScrollbar
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default App;
