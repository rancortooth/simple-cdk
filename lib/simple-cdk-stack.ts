import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class SimpleCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    //
    // Get a reference to an existing VPC
    //
    const vpcObj = ec2.Vpc.fromVpcAttributes(this, "my-existing-vpc", {
      vpcId: "vpc-00357b8b3c2dcf3",
      availabilityZones: ["us-east-1a", "us-east-1b"],
      privateSubnetIds: ["subnet-079269b123455", "subnet-07922342341234"]
    });


    //
    // How to add an inbound rule to a security group which
    // allows another security group to access port 22
    //
    const allowThisSecurityGroup = new ec2.SecurityGroup(this, 'stumbleweb-cms-sg', {
      vpc: vpcObj,
    });

    const securityGroup = ec2.SecurityGroup.fromSecurityGroupId(this,
      "rds_sg",
      allowThisSecurityGroup);
    securityGroup.addIngressRule(securityGroup, ec2.Port.allTcp());

  }
}
