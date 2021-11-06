import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native"

const Link = ({ active, children, onClick }) => (
  <Button
    title={children}
    onPress={onClick}
    disabled={active}
    style={{
        marginLeft: '4px',
    }}
  />
)

export default Link