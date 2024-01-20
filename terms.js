import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';

export default class Terms extends Component{
    render(){
        return(
            <ScrollView  style={styles.container}>
                 <View>
                <Text style ={styles.title}>TERMS OF USE</Text>

                <Text style ={styles.subtitles}>Last Updated: [Date]</Text>
                <Text style ={styles.text}>Please read these Terms of Use ("Terms") carefully
                 before using the MoBank mobile banking application ("the App") provided by
                  MoBank Inc. ("MoBank," "we," or "us"). These Terms govern your access to 
                  and use of the App. By downloading, installing, or using the App, you agree
                   to be bound by these Terms. If you do not agree to these Terms, please 
                   refrain from using the App.</Text>
                 
                <Text style ={styles.subtitles}>1. App Services</Text>


                <Text style ={styles.text}>
               MoBank is a mobile banking
                application that allows you to access various
                 banking services provided by our partner financial institutions ("Partner 
                 Banks"). These services may include, but are not limited to, account 
                 balance inquiries, funds transfers, bill payments, and other banking 
                 transactions.

{'\n'}{'\n'}
  MoBank is not a financial institution, and we 
do not hold or control any funds or financial
 instruments on your behalf. MoBank acts solely as a facilitator to provide access to Partner
  Bank services through the App.
{'\n'}{'\n'}
  The availability and functionality of the App 
may vary depending on your geographic
 location and the policies of our Partner Banks. MoBank reserves the right to modify, 
 suspend, or terminate any part of the App's services at any time without prior notice.
                </Text>

     <Text style ={styles.subtitles}>2. Eligibility</Text>

     <Text style ={styles.text} >

     <Text style ={styles.numbering}>a.</Text> By using the App, you represent and 
     warrant that you are at least 18 years old and have the legal capacity to enter 
     into a binding contract. If you are using the App on behalf of a company or 
     organization, you represent and warrant that you have the authority to bind such 
     entity to these Terms.

     {'\n'}{'\n'}

     <Text style ={styles.numbering}>b.</Text> You are responsible for ensuring that 
     your use of the App complies with all applicable laws, regulations, and contractual
      obligations. You must not use the App if it is prohibited by law in your jurisdiction.

     </Text>


     <Text style ={styles.subtitles}>3. User Accounts and Security</Text>

     <Text style ={styles.text}>

      To use the App, you may need to create a user account. You agree to provide
       accurate, complete, and up-to-date information during the registration process.
        You are responsible for maintaining the confidentiality of your account credentials, 
        including your username and password.
      {'\n'}{'\n'}
 You are solely responsible for all activities that occur under your user account. If you 
 believe that your account has been compromised or accessed without authorization, you must 
 notify MoBank immediately.
 {'\n'}{'\n'}
MoBank reserves the right to suspend or terminate your account, refuse service, or deny 
access to the App if we have reasonable grounds to believe that you have violated these 
Terms or engaged in fraudulent or unauthorized activities.

     </Text>



     <Text style ={styles.subtitles}>4. Intellectual Property</Text>
     <Text style ={styles.text}>

     The App, including its design, graphics, logos, and all related content, is owned or 
     licensed by MoBank and protected by intellectual property laws. You agree not to 
     modify, copy, distribute, transmit, display, perform, reproduce, publish, license, 
     create derivative works from, transfer, or sell any information, software, products, 
     or services obtained from or through the App.
     {'\n'}{'\n'}
MoBank grants you a limited, non-exclusive, non-transferable, revocable license to use the 
App for its intended purpose. This license does not permit you to use the App for any
 commercial purposes or to modify or create derivative works based on the App.

     </Text>

     <Text style ={styles.subtitles}>5. Privacy</Text>

     <Text style ={styles.text}>

     MoBank respects your privacy and is committed to protecting your personal information.
      Our collection, use, and disclosure of your information are governed by our Privacy 
      Policy, which is incorporated by reference into these Terms. By using the App, 
      you consent to the collection and processing of your information as described in the 
      Privacy Policy.

     </Text>

     <Text style ={styles.subtitles}>6. Limitation of Liability</Text>
     <Text style ={styles.text}>

     To the fullest extent permitted by applicable law, MoBank and its officers, directors,
      employees, and agents shall not be liable for any direct, indirect, incidental, special, 
      consequential, or exemplary damages, including but not limited to damages for loss of
       profits, goodwill, use, data, or other intangible losses, arising out of or in
        connection with your use of the App or reliance on any information obtained from 
        the App.

     </Text>

     <Text style ={styles.subtitles}>7. Indemnification</Text>

     <Text style ={styles.text}>

     You agree to indemnify and hold harmless MoBank and its officers, directors,
      employees, and agents from and against any claims, liabilities, damages, losses, and
       expenses, including reasonable attorneys' fees and costs, arising out of or in any 
       way connected with your use of the App, violation of these Terms, or infringement of 
       any third-party rights.

     </Text>

     <Text style ={styles.subtitles}>8. Changes to the Terms</Text>

     <Text style ={styles.text}>

     MoBank reserves the right to modify or update these Terms at any time without 
     prior notice. Any changes to the Terms will be effective upon posting the revised v
     ersion on the App or notifying you through other reasonable means. Your continued
      use of the App after the changes become effective constitutes your acceptance of the 
      revised Terms.

     </Text>

     <Text style ={styles.subtitles}>9. Governing Law and Dispute Resolution</Text>

     <Text style ={styles.text}>

     These Terms shall be governed by and construed in accordance with the laws of the
      jurisdiction where MoBank is incorporated, without regard to its conflict of law
       provisions.
     {'\n'}{'\n'}
     Any dispute, claim, or controversy arising out of or relating to these Terms
      or your use of the App shallbe resolved through binding arbitration administered 
      by a reputable arbitration organization. The arbitration shall be conducted in
       accordance with the rules and procedures of the arbitration organization, and the 
       arbitrator's decision shall be final and binding. You and MoBank waive the right
        to bring or participate in a class action lawsuit or class-wide arbitration.

     </Text>

     <Text style ={styles.subtitles}>10. Severability</Text>

     <Text style ={styles.text}>

     If any provision of these Terms is found to be unlawful, void, or unenforceable, that 
     provision shall be deemed severable from the remaining provisions and shall not affect 
     their validity and enforceability.

     </Text>


     <Text style ={styles.subtitles}>11. Entire Agreement</Text>

     <Text style ={styles.text}>

     These Terms constitute the entire agreement between you and MoBank regarding 
     your use of the App and supersede any prior or contemporaneous agreements, 
     communications, and proposals, whether oral or written, between you and MoBank.

     </Text>

     <Text style ={styles.subtitles}>12. Contact Us</Text>

     <Text style ={styles.text}>

     If you have any questions, concerns, or feedback regarding these Terms or the App,
      please contact us at
      {'\n'}{'\n'}

      <Text style ={styles.numbering} >
       mobankcop@.ac.ke {'\n'}
       +254 746754543
       {'\n'}
       +254 765243542.
       </Text>

       {'\n'}{'\n'}

By using the MoBank mobile banking app, you acknowledge that you have read, understood,
 and agreed to these Terms of Use.

     </Text>

                 </View>
            </ScrollView>
           
        )
    }
} 

const styles = StyleSheet.create({
    container:
    {
    backgroundColor:'#dfcdcb',
    flex:1,
    paddingLeft:5,
    paddingRight:5
},
title:
{
    color:'black',
    textAlign:'center',
    textDecorationLine:'underline',
    fontSize:18,
    fontWeight:'bold'},

    subtitles:
    {
        color:'black',
        textAlign:'center',
        
        paddingTop:20,
        fontSize:16,
        fontWeight:'bold'},

    text:{
       color:'#075171'
        
    },

    numbering:{
        color:'black'
    }

})