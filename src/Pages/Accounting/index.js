import React, { useEffect } from "react";
import "./style.css";
import ParallaxDiv from "../../Components/ParallaxDiv";
import Header from "../../Containers/Header";
import Card from "../../Components/Card";
import VissionAboutCommon from "../../Containers/VissionAboutCommon";
import Footer from "../../Containers/Footer";

const Accounting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <ParallaxDiv heading="ACCOUNTING" image="accounting" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-justify mx-auto">
            <h6>
              Why to hire accountants and pay more when you can get all
              Accounting & Bookkeeping services at a much lower cost by
              outsourcing the tasks. We at Pozitive Approach offer all kinds of
              Bookkeeping services at affordable prices. We understand your
              business needs and make accounts simple and smooth so that you can
              focus on Business growth instead of wasting your valuable time
              with accounting issues. We keep your business accounting records
              up-to-date and 100% confidential.
            </h6>
            <ul>
              {" "}
              <li>Data Entry (Daily Transactions)</li>
              <li>Preparation and maintenance of daily accounts</li>
              <li>Charts of Accounts Review/Setup</li>
              <li>
                Converting all paperwork into online accounting invoices for
                easy access
              </li>
              <li>
                Forecasting & Projections: Analyzing the cash requirement of the
                business and forecasting about future requirement{" "}
              </li>
              <li>Bank Reconciliation</li>
              <li>Accounts Receivable/Payable management</li>
              <li>Report like Cash flow, P&L & Balance Sheet</li>
              <li>Month & Year-end closing</li>
              <li>VAT services </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Card
            pkgName="Basic Package"
            price="1600"
            cardMargin="3%"
            color="#000"
            bgColor="#fff"
          >
            <h5>100 Monthly Transactions</h5>
            <h5>Daily Transactions Recording</h5>
            <ul>
              <li>Sales</li>
              <li>Purchase</li>
              <li>General</li>
            </ul>
            <h5>Monthly Accounting Reports</h5>
            <ul>
              <li>Sales</li>
              <li>Accounts Receivable</li>
              <li>Accounts Payable</li>
              <li>Bank Reconciliation</li>
            </ul>
            <h5>Quarterly Management Reports</h5>
            <ul>
              <li>Balance Sheet</li>
              <li>Income Statement</li>
            </ul>
            <h5>Quarterly VAT Return Filing</h5>
            <h5>Annually Financial Reports</h5>
          </Card>
          <Card
            pkgName="Premium Package"
            price="4599"
            cardMargin="2%"
            color="#fff"
            bgColor="#002d5b"
          >
            <h5>400 Monthly Transactions</h5>
            <h5>Daily Transactions Recording</h5>
            <ul>
              <li>Sales</li>
              <li>Purchase</li>
              <li>General</li>
            </ul>
            <h5>Monthly Accounting Reports</h5>
            <ul>
              <li>Sales</li>
              <li>Accounts Receivable</li>
              <li>Accounts Payable</li>
              <li>Case & Bank Reconciliation</li>
              <li>Expense Report</li>
            </ul>
            <h5>Monthly Management Reports</h5>
            <ul>
              <li>Balance Sheet</li>
              <li>Income Statement</li>
              <li>Cash Flow Statement</li>
            </ul>
            <h5>Quarterly Management Reports</h5>
            <ul>
              <li>Fixed Asset Register</li>
              <li>Financial Analysis</li>
            </ul>
            <h5>Quarterly VAT Return Filing</h5>
            <h5>Annually Financial Reports</h5>
            <h5>Annually End of Services & Gratuity Calculation</h5>
          </Card>
          <Card
            pkgName="Standard Package"
            price="3000"
            color="#000"
            cardMargin="3%"
            bgColor="#fff"
          >
            <h5>200 Monthly Transactions</h5>
            <h5>Daily Transactions Recording</h5>
            <ul>
              <li>Sales</li>
              <li>Purchase</li>
              <li>General</li>
            </ul>
            <h5>Monthly Accounting Reports</h5>
            <ul>
              <li>Sales</li>
              <li>Accounts Receivable</li>
              <li>Accounts Payable</li>
              <li>Case & Bank Reconciliation</li>
            </ul>
            <h5>Monthly Management Reports</h5>
            <ul>
              <li>Balance Sheet</li>
              <li>Income Statement</li>
            </ul>
            <h5>Quarterly Management Reports</h5>
            <ul>
              <li>Cash Flow Statement</li>
              <li>Expense Report</li>
            </ul>
            <h5>Quarterly VAT Return Filing</h5>
            <h5>Annually Financial Reports</h5>
          </Card>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <VissionAboutCommon title="VAT" />
          <div className="col-md-12 text-justify">
            <h6>
              VAT was introduced on 1st January 2018 in UAE therefore it is
              still a fairly new concept in UAE. It is mandatory for businesses
              to implement the system to be in compliance with the law and this
              requires the services of experienced and qualified personnel who
              can provide the right advice for smooth transition.
            </h6>
            <h6>
              Every business has a different outlook which has different
              requirements and calculations making it necessary for businesses
              to seek support and guidance from experts to provide industry
              specific VAT services meeting the legal requirements in UAE Every
              business, individual or firm, has to be registered with the FTA.
              Every business having an annual turnover of AED 375,000 or more is
              required to register their business under the VAT regime. However,
              even companies who do not meet the minimum turnover criteria can
              also register themselves via voluntary registration. Companies who
              do not register themselves in the VAT system, they would not be to
              charge VAT on their sales neither collect VAT on their purchased
              inputs. Also, failure to register within the stipulated time will
              encompass a fine of AED 20,000.
            </h6>
            <h6 className="mt-5 mb-3">
              Thresholds for VAT registration under the FTA
            </h6>
            <ul>
              <li>
                Mandatory registration for businesses whose annual turnover
                exceeds AED 375,000 within the last one year
              </li>
              <li>
                Voluntary registration for businesses with annual turnover
                between AED 187,500 and AED 375,000
              </li>
              <li>
                Start-ups with VAT attracting expenses AED 187,500 and above.
              </li>
            </ul>
            <h6 className="mt-5 mb-3">
              Documents required for VAT registration
            </h6>
            <p>
              As per the guidelines of the FTA, the businesses registering
              themselves have to furnish all the necessary documents to be
              eligible for registration. The list of documents required is as
              follows.
            </p>
            <ol>
              <li>Copy of Trade License</li>
              <li>Customs Authority Registration code</li>
              <li>Memorandum of Association (MOA)</li>
              <li>Passport copy (Owner/partners)</li>
              <li>Emirates ID (Owner/partners)</li>
              <li>Company’s Bank Account details and IBAN</li>
              <li>
                Details Business Turnover for the last 12 months (Balance Sheet,
                Audited Reports or Bank Statements)
              </li>
              <li>
                Copy of audited/unaudited financials for the last 12 months
              </li>
              <li>
                Details of primary and secondary activities of the business
                (general description is required)
              </li>
              <li>
                List other businesses of the directors/ partners in UAE along
                with their Trade License copies
              </li>
            </ol>
            <h6 className="mt-5 mb-3">
              Apart from the above mentioned documents, one is also required to
              provide other details such as
            </h6>
            <ul>
              <li>Company’s registered address and P.O. Box.</li>
              <li>Projected revenues and expenses for the next 30 days.</li>
              <li>Names of other GCC countries if having business in them.</li>
              <li>
                Details of Business Activities. (Import/Export or Trading).
              </li>
              <li>
                Name of Tax Group (if want to they want one tax group number for
                all the entities)
              </li>
            </ul>
            <img
              className="mt-5"
              style={{ width: "100%" }}
              src={require("../../Images/vat-reg.jpg")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Accounting;
