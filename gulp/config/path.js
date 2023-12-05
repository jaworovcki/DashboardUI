import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const builderFolder = './dist';
const appFolder = './app';

export const path={
    build:{
        js:`${builderFolder}/js/`,
        css:`${builderFolder}/css/`,
        html:`${builderFolder}/`,
        files:`${builderFolder}/img/`,
        json:`${builderFolder}/js/`,
    },
    src:{
        js:`${appFolder}/js/app.js`,
        scss:`${appFolder}/scss/style.scss`,
        json: `${appFolder}/js/data.json`,
        html:`${appFolder}/*.html`,
        files:`${appFolder}/img/**/*.*`,
    },
    watch:{
        js:`${appFolder}/js/**/*.js`,
        scss:`${appFolder}/scss/**/*.scss`,
        html:`${appFolder}/**/*.html`,
        files:`${appFolder}/img/**/*.*`,
        json: `${appFolder}/js/data.json`,
    },
    clean:builderFolder,
    builderFolder:builderFolder,
    srcFolder:appFolder,
    rootFolder:rootFolder,
    ftp:``
}