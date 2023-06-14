#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SimpleCdkStack } from '../lib/simple-cdk-stack';

const app = new cdk.App();
new SimpleCdkStack(app, 'SimpleCdkStack', {

  env: { account: '123456789012', region: 'us-east-1' },

});