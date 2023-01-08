import * as fs from "fs";
import * as path from "path";

export default () => {
  return {
    config(config, env) {
      console.log("config=====", config, env);

      const srcDirContent = fs.readdirSync(process.cwd() + "/src");
      const ret = {
        dirs: [],
        files: [],
      };
      srcDirContent.map((item) => {
        const stat = fs.statSync(`${process.cwd()}/src/${item}`);
        if (stat.isDirectory()) {
          ret.dirs.push(item);
        } else {
          ret.files.push(item);
        }
      });
      let alias={};
      ret.dirs.map((dir) => {
        alias[`@${dir}`] = path.resolve(process.cwd() + "/src", `./${dir}`);
      });
      console.log("alias=====", alias);
      return {
        resolve: {
          alias,
        },
      };
    },
  };
};
