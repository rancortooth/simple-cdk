import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class SimpleCdkStackAddSecurityGroupRule extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //
    // Add an inbound rule to securityGroupB which allows
    // allows securityGroupA to access port 22
    //
    const securityGroupA = ec2.SecurityGroup.fromSecurityGroupId(this, "security-group-A", 'sg-091bbd3cbfb6643c9');

    const securityGroupB = ec2.SecurityGroup.fromSecurityGroupId(this, "security-group-B", 'sg-094283b4eb5b6529d');

    // Allow all TCP traffic from "allowThisSecurityGroup" to "securityGroup"
    securityGroupB.addIngressRule(securityGroupA, ec2.Port.allTcp());

  }
}
