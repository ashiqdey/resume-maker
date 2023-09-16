const defaultConfig = {
  color: "#fff",
  font: {
    defaultSize: 9,
    400: "Lato",
    700: "Lato Bold",
  },
};

export const commonCss = (config = defaultConfig) => {
  return {
    page: {
      lineHeight: 1.6,
      padding: 30,
      fontSize: config?.font?.defaultSize || 9,
      fontFamily: config.font["400"],
    },

    row: { flexDirection: "row" },
    column: { flexDirection: "column" },
    aic: { alignItems: "center" },
    jcc: { justifyContent: "center" },
    jcsb: { justifyContent: "space-between" },
    flexWrap: { flexWrap: "wrap" },

    w50: { width: "50%" },
    w100: { width: "100%" },
    w95: { width: "95px" },
    w101: { width: "105px" },
    mw400: { maxWidth: 400 },

    pr: { position: "relative" },
    relative: { position: "relative" },
    absolute: { position: "absolute" },

    p10: { padding: 10 },
    p15: { padding: 15 },
    p20: { padding: 20 },
    p25: { padding: 25 },
    p30: { padding: 30 },
    pt0: { paddingTop: 0 },
    pt3: { paddingTop: 3 },
    pt5: { paddingTop: 5 },
    pl15: { paddingLeft: 15 },
    pl30: { paddingLeft: 30 },
    pr5: { paddingRight: 5 },
    pr15: { paddingRight: 15 },
    pr_4: { paddingRight: 24 },
    pb10: { paddingBottom: 10 },
    pb50: { paddingBottom: 50 },

    mx_auto: { margin: "0 auto" },
    mt3: { marginTop: 3 },
    mt5: { marginTop: 5 },
    mt10: { marginTop: 10 },
    mt15: { marginTop: 15 },
    mt30: { marginTop: 30 },
    mt50: { marginTop: 50 },
    mr10: { marginRight: 10 },
    mr20: { marginRight: 20 },
    mb5: { marginBottom: 5 },
    mb10: { marginBottom: 10 },
    mb15: { marginBottom: 15 },
    mb20: { marginBottom: 20 },
    mb30: { marginBottom: 30 },
    mb50: { marginBottom: 50 },
    mb70: { marginBottom: 70 },


    square30: { height: 20 },
    square50: { height: 50 },
    top30: { top: 30 },
    right30: { right: 30 },

    // column
    col2: { width: "16.66%" },
    col3: { width: "25%" },
    col4: { width: "33.33%" },
    col5: { width: "41.66%" },
    col6: { width: "50%" },
    col7: { width: "58.31%" },
    col8: { width: "66.66%" },
    col9: { width: "75%" },
    col10: { width: "83.33%" },
    col12: { width: "100%" },

    // font & typography
    h1: { fontSize: 40, fontWeight: 700, fontFamily: config.font["700"] },
    h2: { fontSize: 25, fontWeight: 700, fontFamily: config.font["700"] },
    h3: { fontSize: 20, fontWeight: 700, fontFamily: config.font["700"] },
    h4: { fontSize: 13, fontWeight: 700, fontFamily: config.font["700"] },
    h5: { fontSize: 9, fontWeight: 700, fontFamily: config.font["700"] },
    regular: { fontWeight: 400, fontFamily: config.font["400"] },
    strong: { fontWeight: 700, fontFamily: config.font["700"] },
    small: { fontSize: 9 },
    font9: { fontSize: 9 },
    font10: { fontSize: 10 },
    font11: { fontSize: 11 },
    textCenter: { textAlign: "center" },
    textRight: { textAlign: "right" },
    lineHeight1: { lineHeight: 1 },
    lineHeight14: { lineHeight: 1.4 },
    label: { opacity: 0.6, lineHeight: 1, marginTop: 5 },
    subtitle: { fontSize: 11 },
    uppercase: { textTransform: "uppercase" },

    // textPrimary: { color: "#007bff" },
    // textSecondary: { color: "#6c757d" },

    opacity06: { opacity: 0.6 },
    opacity07: { opacity: 0.7 },
    opacity08: { opacity: 0.8 },

    // custom
    imageWrap: { width: "210mm", position: "absolute" },
    image: { width: "210mm", height: "297mm" },

    bg: {
      width: 599,
      height: "195px",
      position: "absolute",
      left: 0,
      top: 0,
      backgroundColor: config?.color,
    },


    // for testing
    pink: { backgroundColor: "pink" },
    blue: { backgroundColor: "blue" },
    red: { backgroundColor: "red" },




    mt_1: { marginTop: 4 },
    mt_2: { marginTop: 8 },
    mt_3: { marginTop: 16 },
    mt_4: { marginTop: 24 },
    mb_1: { marginBottom: 4 },
    mb_2: { marginBottom: 8 },
    mb_3: { marginBottom: 16 },
    mb_4: { marginBottom: 24 },
    my_2: { marginTop: 8, marginBottom: 8 },

    p_1: { padding: 4 },
    p_2: { padding: 8 },
    pt_1: { paddingTop: 4 },
    pt_2: { paddingTop: 8 },
    pt_4: { paddingTop: 24 },
    pl_4: { paddingLeft: 24 },
    pb_1: { paddingBottom: 4 },
    pb_2: { paddingBottom: 8 },
    pb_3: { paddingBottom: 16 },
    pb_4: { paddingBottom: 24 },
    py_4: { paddingTop: 24, paddingBottom: 24 },

    /*
    NOT used so far


    display-1 :{
      fontSize: 6rem;
      fontWeight: 300;
      line-height: 1.2;
    }
    display-2 :{
      fontSize: 5.5rem;
      fontWeight: 300;
      line-height: 1.2;
    }
    text :{
      marginTop: 0;
      marginBottom: 1rem;
    }
    Profile-image :{
      padding: 0.25rem;
      background-color: #fff;
      border: 1px solid #dee2e6;
      borderRadius: 0.25rem;
      max-width: 100%;
      height: auto;
    }
  
    text-primary :{
      color: #007bff !important;
    }
    text-secondary :{
      color: #6c757d !important;
    }
    Bg-primary :{
      background-color: #007bff !important;
    }
    Bg-secondary :{
      background-color: #6c757d !important;
    }
    Container :{
      width: 100%;
      paddingRight: 15px;
      paddingLeft: 15px;
      marginRight: auto;
      marginLeft: auto;
    }
    Section :{
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
    }
    
    M-0 :{
      margin: 0 !important;
    }
    MT-0 :{
      marginTop: 0 !important;
    }
    MR-0 :{
      marginRight: 0 !important;
    }
    MB-0 :{
      marginBottom: 0 !important;
    }
    ML-0 :{
      marginLeft: 0 !important;
    }
    M-1 :{
      margin: 0.25rem !important;
    }
    MT-1 :{
      marginTop: 0.25rem !important;
    }
    MR-1 :{
      marginRight: 0.25rem !important;
    }
    MB-1 :{
      marginBottom: 0.25rem !important;
    }
    mL-1 :{
      marginLeft: 0.25rem !important;
    }
    m-2 :{
      margin: 0.5rem !important;
    }
    mT-2 :{
      marginTop: 0.5rem !important;
    }
    mR-2 :{
      marginRight: 0.5rem !important;
    }
    mB-2 :{
      marginBottom: 0.5rem !important;
    }
    mL-2 :{
      marginLeft: 0.5rem !important;
    }
    m-3 :{
      margin: 1rem !important;
    }
    mT-3 :{
      marginTop: 1rem !important;
    }
    mR-3 :{
      marginRight: 1rem !important;
    }
    mB-3 :{
      marginBottom: 1rem !important;
    }
    mL-3 :{
      marginLeft: 1rem !important;
    }
    m-4 :{
      margin: 1.5rem !important;
    }
    mT-4 :{
      marginTop: 1.5rem !important;
    }
    mR-4 :{
      marginRight: 1.5rem !important;
    }
    mB-4 :{
      marginBottom: 1.5rem !important;
    }
    mL-4 :{
      marginLeft: 1.5rem !important;
    }
    p-0 :{
      margin: 0 !important;
    }
    pT-0 :{
      marginTop: 0 !important;
    }
    pR-0 :{
      marginRight: 0 !important;
    }
    pB-0 :{
      marginBottom: 0 !important;
    }
    pL-0 :{
      marginLeft: 0 !important;
    }
    p-1 :{
      margin: 0.25rem !important;
    }
    pT-1 :{
      marginTop: 0.25rem !important;
    }
    pR-1 :{
      marginRight: 0.25rem !important;
    }
    pB-1 :{
      marginBottom: 0.25rem !important;
    }
    pL-1 :{
      marginLeft: 0.25rem !important;
    }
    p-2 :{
      margin: 0.5rem !important;
    }
    pT-2 :{
      marginTop: 0.5rem !important;
    }
    pR-2 :{
      marginRight: 0.5rem !important;
    }
    pB-2 :{
      marginBottom: 0.5rem !important;
    }
    pL-2 :{
      marginLeft: 0.5rem !important;
    }
    p-3 :{
      margin: 1rem !important;
    }
    pT-3 :{
      marginTop: 1rem !important;
    }
    pR-3 :{
      marginRight: 1rem !important;
    }
    pB-3 :{
      marginBottom: 1rem !important;
    }
    pL-3 :{
      marginLeft: 1rem !important;
    }
    p-4 :{
      margin: 1.5rem !important;
    }
    pT-4 :{
      marginTop: 1.5rem !important;
    }
    pR-4 :{
      marginRight: 1.5rem !important;
    }
    pB-4 :{
      marginBottom: 1.5rem !important;
    }
    pL-4 :{
      marginLeft: 1.5rem !important;
    }
    small :{
      fontSize: 0.875em;
      fontWeight: 400;
    }
    strong :{
      fontWeight: bolder;
    }
    border :{
      border: 1px solid #dee2e6 !important;
    }
    borderTop :{
      borderTop: 1px solid #dee2e6 !important;
    }
    borderRight :{
      orderRight: 1px solid #dee2e6 !important;
    }
    borderBottom :{
      borderBottom: 1px solid #dee2e6 !important;
    }
    borderLeft :{
      borderLeft: 1px solid #dee2e6 !important;
    }
    rounded :{
      borderRadius: 0.25rem !important;
    }
    */
  };
};

export default commonCss;
