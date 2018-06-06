'use strict';

exports.mysql = {
  enable: false,
  package: 'egg-mysql',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.oss = {
  enable: true,
  package: 'egg-oss',
};

exports.security = false;

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.alinode = {
  enable: false,
  package: 'egg-alinode',
};

exports.session = true;

