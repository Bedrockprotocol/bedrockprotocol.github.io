import React from 'react';
import { Box, Typography } from '@mui/material';
import SvgMaskGroup2 from '../../assets/images/MaskGroup2.svg';
import { SectionCommunity } from './SectionCommunity';
import { SectionLinks } from './SectionLinks';
import { SectionLearn } from './SectionLearn/SectionLearn';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <Box className={styles.root}>
      <SectionLearn />
      <Box className={styles.container}>
        <img className={styles.bgImg} src={SvgMaskGroup2} />
        <SectionCommunity />
        <SectionLinks />
      </Box>
    </Box>
  );
}
