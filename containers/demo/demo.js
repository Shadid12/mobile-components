import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import { Surface, Text, Button } from 'react-native-paper';
import { With } from 'react-router';



const Wrapper = styled.View`
  width: 100%;
  display: flex;
  margin-top: 5px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`

export default class DemoContainer extends React.Component {

  render() {
    return (
        <ScrollView>
        <Wrapper>
            <Surface style={styles.surface}>
                <Text>Step 1: Nurse Create Patients</Text>
                <Button icon="add" mode="contained" onPress={() => console.log('Pressed', this.props) } style={styles.button}>
                    Add
                </Button>
            </Surface>
            <Surface style={styles.surface}>
                <Text>Step 2: </Text>
            </Surface>
            <Surface style={styles.surface}>
                <Text>Step 1</Text>
            </Surface>
            <Surface style={styles.surface}>
                <Text>Step 2: </Text>
            </Surface>
            <Surface style={styles.surface}>
                <Text>Step 1</Text>
            </Surface>
        </Wrapper>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    surface: {
      padding: 8,
      height: 130,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
      marginBottom: 8
    },
    button: {
        marginTop: 10
    }
});