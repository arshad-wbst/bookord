import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';

const SkeletonLoader = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.skeletonHeader} />
      
      <View style={styles.skeletonRow}>
        <View style={styles.skeletonBox} />
        <View style={styles.skeletonBox} />
      </View>

      <View style={styles.skeletonBoxFull} />
      <View style={styles.skeletonBoxFull} />
      <View style={styles.skeletonBoxFull} />
      <View style={styles.skeletonBoxFull} />

      <View style={styles.skeletonButton} />
      <View style={styles.skeletonText} />
    </SkeletonPlaceholder>
  );
};

export default SkeletonLoader;
