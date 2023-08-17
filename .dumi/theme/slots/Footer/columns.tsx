import {
  GithubOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  MediumOutlined,
  TwitterOutlined,
  ZhihuOutlined,
} from '@ant-design/icons';
import {Link} from 'dumi';
import {FooterColumn, FooterColumnItem} from 'rc-footer/es/column';
import React from "react";

interface GetColumnParams {
  github?: string;
}

export const getColumns = ({github}: GetColumnParams) => {
  const resources: FooterColumn = {
    title: '相关资源',
    items: [
      {
        title: 'Ant Design Vue',
        description: 'AntD 组件库',
        url: 'https://www.antdv.com',
        openExternal: true,
      },
      {
        title: 'Vue Antd Admin',
        description: 'AntD 脚手架',
        url: 'https://iczer.gitee.io/vue-antd-admin-docs',
        openExternal: true,
      },
      {
        title: 'Dumi',
        description: '组件/文档研发工具',
        url: 'https://d.umijs.org',
        openExternal: true,
      },
      {
        title: '长亭雷池',
        description: '应用防火墙',
        url: 'https://waf-ce.chaitin.cn',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png"
            alt="AntV"
          />
        ),
        title: 'DataV',
        url: 'http://datav.jiaminghi.com/',
        description: '数据可视化解决方案',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png"
            alt="AntV"
          />
        ),
        title: 'AntV',
        url: 'https://antv.vision',
        description: '数据可视化解决方案',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico"
            alt="kitchen"
          />
        ),
        title: 'Kitchen',
        description: 'Sketch 工具集',
        url: 'https://kitchen.alipay.com',
        openExternal: true,
      },
    ],
  };

  const community: FooterColumn = {
    title: '社区',
    items: [
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
          />
        ),
        title: 'Ant Design 语雀专栏',
        url: 'https://yuque.com/ant-design/ant-design',
        openExternal: true,
      },
      {
        icon: <ZhihuOutlined style={{color: '#056de8'}}/>,
        title: 'Ant Design 知乎专栏',
        url: 'https://www.zhihu.com/column/c_1564262000561106944',
        openExternal: true,
      },
      {
        icon: <ZhihuOutlined style={{color: '#056de8'}}/>,
        title: '体验科技专栏',
        url: 'http://zhuanlan.zhihu.com/xtech',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png"
            alt="seeconf"
          />
        ),
        title: 'SEE Conf',
        description: '蚂蚁体验科技大会',
        url: 'https://seeconf.antfin.com/',
        openExternal: true,
      },
    ],
  };

  const more: FooterColumn = {
    icon: (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
        alt="more products"
      />
    ),
    title: '更多产品',
    items: [
      {
        title: '电子病历编辑器',
        url: '',
        description: '病历管理与书写',
        openExternal: true,
      },
      {
        title: '工作流引擎',
        url: 'https://gitee.com/gailunJAVA/dingding-mid-business-java?_from=gitee_search',
        description: '',
        openExternal: true,
      },
      {
        title: '仿钉钉后台审批流程',
        url: 'https://gitee.com/soning/approvalFlow',
        description: '',
        openExternal: true,
      },
      {
        title: '表单设计器',
        url: 'https://gitee.com/kcz66/k-form-design',
        description: '',
        openExternal: true,
      },
      {
        title: '代码生成器',
        url: 'https://gitee.com/makunet/maku-generator',
        description: '',
        openExternal: true,
      },
      {
        title: '报表设计器',
        url: 'https://gitee.com/jeecg/JimuReport',
        description: '',
        openExternal: true,
      },
      {
        title: '大屏设计器',
        url: 'https://gitee.com/anji-plus/report',
        description: 'https://gitee.com/dromara/go-view',
        openExternal: true,
      },
    ],
  };

  const about: FooterColumn = {
    title: '关于我们',
    items: [
      {
        title: '公众号',
        description: '-Panther',
        url: '',
        openExternal: true,
      },
      {
        title: '加入我们',
        description: '-拥抱开源',
        url: '',
        openExternal: true,
      },
    ],
  };

  const email: FooterColumn = {
    title: '联系方式',
    items: [
      {
        title: '项目合作',
        description: 'metagalaxy_panther@aliyun.com',
        url: 'https://mail.aliyun.com',
        openExternal: true,
      },
      {
        title: '投诉反馈',
        description: '407027571@qq.com',
        url: 'https://mail.qq.com',
        openExternal: true,
      },
    ],
  };

  return [resources, community,  more, about, email,];
};
