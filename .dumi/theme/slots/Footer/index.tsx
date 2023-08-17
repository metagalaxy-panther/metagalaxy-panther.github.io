import {Divider} from 'antd';
import {useResponsive} from 'antd-style';
import React, {type FC} from 'react';
import {Center, Flexbox} from 'react-layout-kit';

import {getColumns} from './columns';
import {useStyles} from './style';

import {Footer, IFooter, useSiteStore} from 'dumi-theme-antd-style';
import {githubSel} from "dumi-theme-antd-style/dist/store";
import {FooterProps} from "dumi-theme-antd-style/dist/components/Footer";

export default () => {
  const {themeConfig, pkg} = useSiteStore((s) => s.siteData);
  const githubUrl = useSiteStore(githubSel);

  const {styles, theme} = useStyles();
  const {mobile} = useResponsive();
  if (!themeConfig.footer) return null;

  const footer = themeConfig.footerConfig as IFooter;

  const columns =
    footer?.columns === false
      ? undefined
      : getColumns({github: githubUrl || (pkg as any).homepage});

  const bottomFooter = footer?.bottom || themeConfig.footer;
  const copyright = footer?.copyright || `Copyright © 2022-${new Date().getFullYear()}`;
  return <Footer
    theme={footer?.theme || (theme.appearance as FooterProps['theme'])}
    columns={columns}
    bottom={
      mobile ? (
        <Center className={styles.container}>
          {copyright}
          <Flexbox
            align={'center'}
            horizontal
            dangerouslySetInnerHTML={{__html: "Powered by Panther"}}
          ></Flexbox>
        </Center>
      ) : (
        <Center horizontal>
          {copyright}
          <Divider type={'vertical'}/>
          <span dangerouslySetInnerHTML={{__html: "Powered by Panther"}}/>
        </Center>
      )
    }/>;
};
