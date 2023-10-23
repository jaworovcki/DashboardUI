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
    },
    src:{
        js:`${appFolder}/js/app.js`,
        scss:`${appFolder}/scss/style.scss`,
        html:`${appFolder}/*.html`,
        files:`${appFolder}/img/**/*.*`,
    },
    watch:{
        js:`${appFolder}/js/**/*.js`,
        scss:`${appFolder}/scss/**/*.scss`,
        html:`${appFolder}/**/*.html`,
        files:`${appFolder}/img/**/*.*`,
    },
    clean:builderFolder,
    builderFolder:builderFolder,
    srcFolder:appFolder,
    rootFolder:rootFolder,
    ftp:``
}