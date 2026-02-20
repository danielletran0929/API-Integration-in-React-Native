import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';

const StateHandler = ({ loading, error, empty, onRetry, children }) => {
  if (loading)
    return <ActivityIndicator size="large" color="#ffffff" marginTop={400} />;
  if (error)
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
        <Button title="Retry" onPress={onRetry} />
      </View>
    );
  if (empty)
    return (
      <Text
        style={{
          textAlign: 'center',
          marginTop: 350,
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '500',
        }}
      >
        No products available
      </Text>
    );
  return children;
};

export default StateHandler;
