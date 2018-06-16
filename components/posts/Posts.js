import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Posts extends Component {
  render() {
    const { loading, allPosts, navigation } = this.props;
    if (loading) return <ActivityIndicator size="large" />
    return (
      <View>
        <FlatList
          data={allPosts}
          keyExtractor = {
            item => item.id
          }
          renderItem={({item}) => (
            <Text
              onPress={() => navigation.navigate("Post", {
                id: item.id,
                title: item.title
              })}
            >
              {item.title}
            </Text>)}
        />
      </View>
    )
  }
}

const postsQuery = gql`
  query postsQuery {
    allPosts {
      id
      title
    }
  }
`;

export default graphql(postsQuery, {
  props: ({data}) => ({...data})
})(Posts);