import websiteIcon from '../img/website-icon.png'; // Import your local image

export default function Support() {
    return  (
      <div className="bg-white py-20"> {/* Reduced padding */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div className="mt-2"> {/* Negative margin to move up */}
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  Contact Us
              </h2>
              <p className="mt-4 text-base/7 text-gray-700">
              How can we assist you today? <br />
              Whether you have a question, need some help, or simply want to share your thoughts, we’re here for you. 
              <br />Don’t hesitate to reach out—we’d love to hear from you! <br /><br />
                <span className="block text-sm/6 font-semibold text-gray-900">
                  Address: 101 Pasir Ris Road <br />
                  Singapore 519154 <br />
                  Tel: 6344 7551 <br />
                  <br />
                  Availability: Monday to Friday, <br />
                  10:00 AM – 4:00 PM
                </span>
                
              </p>
            </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">General Inquiries</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>Contact number: 6345 6113 </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Technical Support</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>Contact number: 6345 6113</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Email Us at</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Email</dt>
                      <dd>mwh@muhammadiyah.org.sg</dd>
                    </div>
                  </dl>
                </div>               
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Follow Us</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Social Media Links</dt>
                      <dd>
                        {/* Social Media Icons */}
                        <div className="mt-2 flex space-x-4">
                          {/* Website Icon */}
                          <a
                            href="https://mwh.muhammadiyah.org.sg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={websiteIcon} // Use the imported image
                              alt="Website"
                              className="h-7 w-7"
                            />
                          </a>
                          {/* Instagram Icon */}
                          <a
                            href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fmuhammadiyahwelfarehome%2F&is_from_rle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </a>
                          {/* Facebook Icon */}
                          <a
                            href="https://www.facebook.com/muhammadiyahwelfarehome"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                              <path
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                              />
                            </svg>
                          </a>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  