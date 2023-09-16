/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Text,
  Image,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { removeHttp } from "./helper";
import commonCss from "./css";

// ----------font----------
const font = {
  "400": "Lato",
  "700": "Lato Bold",
}
Font.register({
  family: font["400"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});
Font.register({
  family: font["700"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});
// ----------END font----------

const COLOR = "#edeeef";

function CreatePdf({
  type,
  firstName,
  lastName,
  address,
  email,
  mobile,
  jobTitle = "Job test",
  bio = "About user",
  skills = ["Skill 1", "Skill 2"],
  hobbies = [],
  languages = [],
  profileImage = "",
  education = [],
  experience = [],

  website,
  portfolio,
  linkedin,
  github,
  instagram,
  twitter,
  crunchBase,

  config,
  image = "/img/resume/bg-3.jpg",
  qr = "",
  ...props
}) {
  // ----------styles----------

  const css = commonCss({
    color: config?.color || COLOR,
    font,
  });

  const s = StyleSheet.create({
    ...css,


    hr: {
      width: "100%",
      height: "1px",
      backgroundColor: "rgba(0,0,0,0.1)",
      margin: "30px auto",
    },
    qr: {
      height: 60,
      width: 60,
      top: 0,
      right: 0,
    },
    bulletPoint: {
      height: 4,
      width: 4,
      backgroundColor: "#000",
      marginTop: 3,
      marginRight: 5,
      marginLeft: 5,
      borderRadius: 4,
    },
    experience_title: {
      width: "250px",
    },



    bg: {
      ...css.bg,
      height: 220,
    },
    hr: {
      ...css.hr,
      backgroundColor: "#ccc",
    },
    bio: {
      height: 80,
    },
  });
  // ----------END styles----------

  const getClass = (classes) => {
    let styleObj = {};
    classes.split(" ").forEach(className => {
      styleObj = { ...styleObj, ...(s[className] || {}) }
    });
    return styleObj;
  }


  return (
    <Document author={firstName} title={firstName} subject={`Resume of ${firstName}`}>
      <Page size="A4" {...props} style={s.page}>
        {config.image && image && (
          <View fixed style={s.imageWrap}>
            <Image style={s.image} src={image} />
          </View>
        )}

        <View style={s.bg} />

        <View style={getClass("row")}>
          <View style={getClass("col8 pr15")}>
            <Text style={getClass("h2")}>{firstName} {lastName}</Text>
            <Text style={getClass("h3 opacity06")}>{jobTitle}</Text>
            <Text style={getClass("mt10 bio")}>{bio}</Text>
          </View>


          {/* Contact */}
          <View style={getClass("col4 pl15 column")}>
            <Text style={getClass("h3 ")}>Contact</Text>
            {email && (
              <View>
                <Text style={getClass("label")}>Email</Text>
                <Text>{email}</Text>
              </View>
            )}
            {config.phone && mobile && (
              <View>
                <Text style={getClass("label")}>Phone</Text>
                <Text>{mobile}</Text>
              </View>
            )}
            {config.location && address && (
              <View>
                <Text style={getClass("label")}>Address</Text>
                <Text>{address}</Text>
              </View>
            )}
          </View>
          {/* END Contact */}
        </View>



        <View style={getClass("row mt50")}>
          {/* START of left block */}
          <View style={getClass("col8 pr15")}>
            {config.experience && (
              <View>
                <Text style={getClass("h3")}>Work Experiences</Text>
                {experience.map((item, i) => (
                  <ExpItems
                    key={`exp-${i}`}
                    s={s}
                    getClass={getClass}
                    title={item.company}
                    subtitle={item.position}
                    date={item.date}
                    details={item.details}
                  />
                ))}
              </View>
            )}

            <Divider style={s.hr} />

            <View style={getClass("mt50")}>
              <Text style={getClass("h3")}>Education</Text>
              {education.map((item, i) => (
                <ExpItems
                  key={`edu-${i}`}
                  s={s}
                  getClass={getClass}
                  title={item.school}
                  subtitle={item.course}
                  date={item.date}
                  details={item.details}
                />
              ))}
            </View>
          </View>
          {/* END of left block */}


          {/* STRAT of right block */}
          <View style={getClass("col4 pl15")}>

            {
              config.skills && (
                <View>
                  <Text style={getClass("h3")}>Skills</Text>
                  {skills.map((skill, i) => (
                    <Item key={`skill-${i}`} getClass={getClass}>
                      {skill}
                    </Item>
                  ))}
                  <Divider style={s.hr} />
                </View>
              )
              // END of skills
            }

            {
              config.hobbies && (
                <View wrap={false}>
                  <Text style={getClass("h3")}>Hobbies</Text>
                  {hobbies.map((e, i) => (
                    <Item key={i} getClass={getClass}>
                      {e}
                    </Item>
                  ))}
                  <Divider style={s.hr} />
                </View>
              )
              // END of hobbies
            }

            {/* {
              config.languages && (
                <View wrap={false}>
                  <Text style={getClass("h3")}>Languages</Text>
                  {languages.map((e, i) => (
                    <Item key={i} getClass={getClass}>
                      {e.language}
                    </Item>
                  ))}
                  <Divider style={s.hr} />
                </View>
              )
              // END of languages
            } */}

            {
              config.links && (
                <View wrap={false}>
                  <Text style={getClass("h3")}>Connect</Text>
                  <View style={s.font9}>
                    <Text>{removeHttp(website)}</Text>
                    <Text>{removeHttp(portfolio)}</Text>
                    <Text>{removeHttp(linkedin)}</Text>
                    <Text>{removeHttp(github)}</Text>
                    <Text>{removeHttp(instagram)}</Text>
                    <Text>{removeHttp(twitter)}</Text>
                    <Text>{removeHttp(crunchBase)}</Text>
                  </View>
                </View>
              )
              // END of links
            }

            <View style={getClass("mt50")}>
              <Image style={getClass("qr mx_auto")} src={qr} />
            </View>

          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CreatePdf;



const Divider = ({ style }) => <View style={style} />;


const Item = ({ children, getClass }) => {
  if (!children || children?.length === 0) {
    return null;
  }

  return (
    <View style={getClass("row")} wrap={false}>
      <Text style={getClass("bulletPoint")}></Text>
      <Text break>{children}</Text>
    </View>
  );
};

const ExpItems = ({ title, subtitle, details, date, getClass }) => {
  return (
    <View style={getClass("mb20")} wrap={false}>
      <View style={getClass("row jcsb")}>
        <Text style={getClass("h4 experience_title")}>{title}</Text>
        <Text style={getClass("opacity06 lineHeight1 textRight pt3 w95")}>{date}</Text>
      </View>
      <Text style={getClass("subtitle opacity07")}>{subtitle}</Text>
      <View style={getClass("w100")}>
        {details.split("\n").map((e, i) => (
          <Item key={i} getClass={getClass}>
            {e}
          </Item>
        ))}
      </View>
    </View>
  );
};
