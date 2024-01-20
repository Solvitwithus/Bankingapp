import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';

export default class Terms extends Component{
    render(){
        return(
<ScrollView style={styles.container}>

<View>
                <Text style ={styles.title}>TERMS OF USE</Text>
                <Text style ={styles.subtitles}>Last Updated: [Date]</Text>


                <Text  style ={styles.text}>

                This Privacy Policy ("Policy") describes how MoBank Inc. ("MoBank,"
                 "we," or "us") collects, uses, and protects the personal information 
                 you provide when using the MoBank mobile banking application ("the App"). 
                 We are committed to protecting your privacy and ensuring the security of 
                 your personal information. By using the App, you consent to the practices
                  described in this Policy.

                </Text>


                <Text style ={styles.subtitles}>1. Information We Collect</Text>


<Text  style ={styles.text}>

Personal Information: When you use the App, we may collect personal information that 
you provide to us, such as your name, contact details, username, password, and other 
information necessary for the provision of banking services by our partner financial 
institutions ("Partner Banks"). We may also collect additional information you choose 
to provide, such as your address or identification documents, to comply with legal and 
regulatory requirements.
{'\n'}{'\n'}
Device Information: We may collect information about the device you use to access the App, 
including the device type, operating system, unique device identifiers, and mobile network 
information. This information helps us optimize and improve the performance of the App.
{'\n'}{'\n'}
Usage Information: We may collect information about your use of the App, including your 
interactions with the App's features and functionalities, transaction history, and other 
data generated or logged during your usage.


</Text>


<Text style ={styles.subtitles}>2. How We Use Your Information</Text>


<Text  style ={styles.text}>

We use the information we collect to provide and improve the App's services, personalize 
your experience, facilitate banking transactions with Partner Banks, and ensure the security
 and integrity of the App.
{'\n'}{'\n'}
We may use your information to communicate with you, respond to your inquiries, and provide 
customer support related to the App.
{'\n'}{'\n'}
We may also use your information to analyze usage trends, conduct research, and develop new 
features or services to enhance the App's functionality.
{'\n'}{'\n'}
We may aggregate and anonymize your information for statistical and analytical purposes, 
which does not identify you personally.



</Text>


<Text style ={styles.subtitles}>3. Information Sharing</Text>


<Text  style ={styles.text}>

We may share your personal information with our Partner Banks to facilitate banking services
 and comply with legal and regulatory requirements.
{'\n'}{'\n'}
We may share your information with trusted third-party service providers who assist us in
 operating the App, such as hosting providers, payment processors, and analytics services. 
 These providers are obligated to protect your information and are prohibited from using it 
 for any other purpose.
{'\n'}{'\n'}
We may disclose your information if required by law, regulation, or court order, or if we 
believe it is necessary to protect our rights, property, or safety, or that of others.
{'\n'}{'\n'}
In the event of a merger, acquisition, or sale of all or a portion of our assets, your
 information may be transferred to the acquiring entity or third party involved.



</Text>


<Text style ={styles.subtitles}>4. Information Sharing</Text>


<Text  style ={styles.text}>

We implement industry-standard security measures to protect your personal information from
 unauthorized access, use, alteration, or disclosure. However, no method of transmission over 
 the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
{'\n'}{'\n'}
It is essential to keep your account credentials confidential and not share them
 with others. If you suspect any unauthorized access to your account or a security breach, 
 please notify us immediately.



</Text>

<Text style ={styles.subtitles}>5. Data Retention</Text>


<Text  style ={styles.text}>

We retain your personal information for as long as necessary to fulfill the purposes
 outlined in this Policy, unless a longer retention period is required or permitted by law.
{'\n'}{'\n'}
Upon termination of your account or withdrawal of consent, we may retain and use your 
information as necessary to comply with our legal obligations, resolve disputes, and enforce 
our agreements.


</Text>



<Text style ={styles.subtitles}>6. Children's Privacy</Text>


<Text  style ={styles.text}>

The App is not intended for use by individuals under the age of 18. We do not knowingly 
collect personal information from children. If we become aware that we have inadvertently 
collected personal information from a child, we will take steps to delete it.


</Text>



<Text style ={styles.subtitles}>7. Third-Party Links and Services</Text>


<Text  style ={styles.text}>

The App may contain links to third-party websites or services that are not operated or 
controlled by MoBank. This Policy does not apply to the practices of third parties, and 
we encourage you to review their privacy policies before providing any personal information.


</Text>


<Text style ={styles.subtitles}>8. Changes to this Policy</Text>


<Text  style ={styles.text}>

We may update this Policy from time to time to reflect changes in our information practices.
 We will notify you of any material changes by posting the updated Policy on the App or
  through other reasonable means. Your continued use of the App after the changes become 
  effective constitutes your acceptance of the revised Policy.


</Text>

<Text style ={styles.subtitles}>9. Contact Us</Text>

<Text  style ={styles.text}>

If you have any questions, concerns, or requests regarding this Privacy Policy or the App's
 privacy practices, please contact us at {'\n'}{'\n'}
 <Text style ={styles.numbering} >
       mobankcop@.ac.ke {'\n'}
       +254 746754543
       {'\n'}
       +254 765243542.
       </Text>
       {'\n'}{'\n'}
By using the MoBank mobile banking app, you acknowledge that you have read,
 understood, and agreed to this Privacy Policy.


</Text>

</View>


</ScrollView>

        )}};


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