export const company = {
  name: "东莞格物数衍科技有限公司",
  short: "格物",
  slogan: "让数据驱动生产，让制造更智能",
  tagline: "工业数据采集与MES解决方案专家",
};

export const nav = [
  { href: "#products", label: "产品" },
  { href: "#solutions", label: "解决方案" },
  { href: "#delivery", label: "交付" },
  { href: "#advantages", label: "优势" },
  { href: "#about", label: "关于" },
  { href: "#contact", label: "联系我们" },
];

// Mega menu data for desktop
export const megaMenuData = {
  products: {
    title: "核心产品",
    items: [
      {
        name: "Hive",
        desc: "企业级多租户IoT平台",
        href: "#products",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        name: "Gearjob",
        desc: "制造业务扩展引擎",
        href: "#products",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
    ],
    featured: {
      title: "技术架构",
      desc: "了解我们的三层架构设计：数据底座 → 执行主线 → 运营协同",
      href: "#solutions",
    },
  },
  solutions: {
    title: "解决方案",
    items: [
      {
        name: "工业数据采集",
        desc: "构建企业级工业数据底座",
        href: "#solutions",
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      },
      {
        name: "MES生产执行",
        desc: "车间作业精细化管理",
        href: "#solutions",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      },
      {
        name: "ERP运营协同",
        desc: "采购、库存、成本一体化",
        href: "#solutions",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      },
    ],
  },
  delivery: {
    title: "交付服务",
    items: [
      { name: "方案咨询", desc: "量身定制转型方案", href: "#delivery" },
      { name: "快速部署", desc: "Docker/K8s标准化部署", href: "#delivery" },
      { name: "持续服务", desc: "培训、运维与升级", href: "#delivery" },
    ],
  },
};

export const stats = [
  { value: "99.9%", label: "系统可用性" },
  { value: "50ms", label: "数据延迟" },
  { value: "10M+", label: "日处理数据点" },
];

export const solutions = [
  {
    title: "工业数据采集",
    subtitle: "Industrial Data Collection",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    desc: "构建企业级工业数据底座，实现设备互联互通。支持主流工业协议，具备边缘计算能力，为上层MES/ERP应用提供可靠的实时数据支撑。",
    features: [
      { title: "多协议适配", desc: "Modbus、OPC-UA、MQTT等主流协议" },
      { title: "边缘处理", desc: "本地预处理，降低带宽与延迟" },
      { title: "数据治理", desc: "清洗、聚合、异常检测一体化" },
      { title: "高可用架构", desc: "断点续传，保证数据完整性" },
    ],
  },
  {
    title: "MES生产执行",
    subtitle: "Manufacturing Execution System",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    desc: "围绕生产过程的透明化与全程追溯，打造制造执行核心主线。从计划排程到质量管控，实现车间作业的精细化管理。",
    features: [
      { title: "智能排程", desc: "APS排程引擎，优化产能利用" },
      { title: "工单追溯", desc: "全流程追溯，责任到人到工序" },
      { title: "质量管控", desc: "SPC统计过程控制，异常预警" },
      { title: "电子看板", desc: "实时产线状态，可视化管理" },
    ],
  },
  {
    title: "ERP运营协同",
    subtitle: "Enterprise Resource Planning",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    desc: "以制造企业运营管理为辅线，实现采购、库存、成本与财务的一体化管控，与MES无缝衔接，消除信息孤岛。",
    features: [
      { title: "主数据管理", desc: "物料、BOM、工艺路线统一管理" },
      { title: "供应链协同", desc: "采购、库存、供应商全链路" },
      { title: "成本核算", desc: "精准成本归集，支撑经营决策" },
      { title: "MES联动", desc: "实时数据互通，业财一体化" },
    ],
  },
];

export const products = [
  {
    name: "Hive",
    tagline: "企业级多租户IoT平台",
    subtitle: "Industrial IoT & Telemetry Pipeline",
    desc: "专为工业场景设计的物联网平台，采用多租户架构，支持海量设备接入与遥测数据高速处理。经过生产环境验证，稳定可靠。",
    highlights: [
      {
        title: "高性能遥测管道",
        desc: "EMQX + NATS + TDengine 黄金组合，百万级消息吞吐",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "多租户隔离架构",
        desc: "Hybrid Schema设计，数据安全隔离，支持超管跨租户管理",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      },
      {
        title: "设备全生命周期",
        desc: "网关激活、在线监测、命令下发、固件升级一站式管理",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      },
    ],
    tech: ["EMQX", "NATS", "TDengine", "PostgreSQL", "Redis"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "Gearjob",
    tagline: "制造业务扩展引擎",
    subtitle: "MES/ERP Business Extension Layer",
    desc: "基于企业应用生态构建的制造业务扩展平台，快速定制生产管理流程，低代码配置，敏捷交付。",
    highlights: [
      {
        title: "低代码定制",
        desc: "基于企业应用框架，业务流程可视化配置，快速响应需求变更",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      },
      {
        title: "生产流程增强",
        desc: "工单管理、质量检验、工艺路线等核心制造场景开箱即用",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      },
      {
        title: "灵活部署",
        desc: "Docker/K8s标准化部署，支持私有化与混合云架构",
        icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      },
    ],
    tech: ["低代码平台", "企业套件", "Python", "MariaDB", "Redis"],
    color: "from-teal-500 to-emerald-500",
  },
];

export const advantages = [
  {
    title: "技术先进",
    desc: "采用云原生架构，微服务设计，支持弹性伸缩与高可用部署",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "开放集成",
    desc: "标准RESTful API，支持与第三方系统无缝对接，打通数据孤岛",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "敏捷交付",
    desc: "模块化产品设计，按需组合，快速部署上线，缩短项目周期",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "持续演进",
    desc: "产品化沉淀与持续迭代，确保系统跟随业务发展不断升级",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

export const delivery = [
  {
    title: "方案咨询",
    desc: "深入理解业务痛点，量身定制数字化转型方案，明确实施路径与预期收益。",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    step: "01",
  },
  {
    title: "快速部署",
    desc: "标准化Docker/K8s部署方案，自动化运维工具，实现快速上线与稳定运行。",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    step: "02",
  },
  {
    title: "持续服务",
    desc: "提供技术培训、运维支持与版本升级服务，确保系统长期稳定运行。",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    step: "03",
  },
];

export const faqs = [
  {
    q: "Hive平台如何保证多租户数据隔离？",
    a: "Hive采用Hybrid Schema多租户架构，每个租户拥有独立的数据空间，通过行级安全策略和API网关双重保障，确保数据严格隔离。同时支持超级管理员进行跨租户运维管理。",
  },
  {
    q: "系统对接需要多长时间？",
    a: "标准产品部署通常3-5个工作日可完成。如涉及设备协议适配或业务流程定制，根据复杂度一般2-4周可交付。我们提供完善的技术文档和对接规范，帮助快速集成。",
  },
  {
    q: "支持哪些工业设备和协议？",
    a: "支持Modbus RTU/TCP、OPC-UA、MQTT、HTTP等主流工业协议，可对接PLC、数控机床、传感器、智能网关等各类工业设备。协议适配层可按需扩展。",
  },
  {
    q: "如何保证系统的高可用性？",
    a: "核心组件支持集群部署，数据库采用主从复制，消息队列支持多副本。结合K8s自动故障转移与弹性伸缩，确保99.9%以上的系统可用性。",
  },
];

export const contact = {
  name: company.short,
  phone: "（占位）",
  email: "（占位）",
  address: "广东省东莞市（具体地址占位）",
  wechat: "（企业微信占位）",
};
