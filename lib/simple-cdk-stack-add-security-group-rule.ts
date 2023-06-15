import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class SimpleCdkStackAddSecurityGroupRule extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // //
    // // Get a reference to an existing VPC
    // //
    // const vpcObj = ec2.Vpc.fromVpcAttributes(this, "my-existing-vpc", {
    //   vpcId: "vpc-00357b8b3c2dcf3",
    //   availabilityZones: ["us-east-1a", "us-east-1b"],
    //   privateSubnetIds: ["subnet-079269b123455", "subnet-07922342341234"]
    // });


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
