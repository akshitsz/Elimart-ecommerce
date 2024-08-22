import React from 'react';

import { MDBFooter, MDBContainer, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';





function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' target='_blank' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' target="_blank"  role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com' target="_blank"  role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/akshit_0170?igsh=c3huYTlweXgzZDRn' target="_blank"  role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href=' https://bit.ly/3WCHf84'  target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/akshitsz' target="_blank" role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for new updates</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label=''  value='enter your email' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          "Step into style with EliteCart, where fashion meets affordability. Discover the latest trends and timeless classics, all in one place for your wardrobe refresh."
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Customer Service</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Contact Us
                  </a>
                </li>
                <li>
                  <a href='/questions' className='text-white'>
                  FAQs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Shipping Information
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Returns & Exchanges
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/aboutus' className='text-white'>
                  Our Story
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Careers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Sustainability
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Affiliate Program
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Policies</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Refund Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Blog
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Extras</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Gift Cards
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Newsletter Signup
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Exclusive Offers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Store Locator
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='/'>
          EliteMart.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
