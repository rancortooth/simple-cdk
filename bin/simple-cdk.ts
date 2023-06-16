#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SimpleCdkStackAddSecurityGroupRule } from '../lib/simple-cdk-stack-add-security-group-rule';

const app = new cdk.App();

//
// NOTE: Change "account" and "region" to match your AWS setup
//
//   env: { account: '123456789012', region: 'us-east-1' }
//

new SimpleCdkStackAddSecurityGroupRule(app, 'SimpleCdkStackAddSecurityGroupRule', {

  env: { account: '123456789012', region: 'us-east-1' },

});