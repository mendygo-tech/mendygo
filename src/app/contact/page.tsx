"use client";

import React, { useState, useCallback } from "react";
import { Mail, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SuccessModal from "@/components/common/SuccessModal";

// Country data with flags and phone codes
const countries = [
    { code: "US", name: "United States", flag: "🇺🇸", phoneCode: "+1" },
    { code: "CA", name: "Canada", flag: "🇨🇦", phoneCode: "+1" },
    { code: "BS", name: "Bahamas", flag: "🇧🇸", phoneCode: "+1242" },
    { code: "BB", name: "Barbados", flag: "🇧🇧", phoneCode: "+1246" },
    { code: "AI", name: "Anguilla", flag: "🇦🇮", phoneCode: "+1264" },
    { code: "AG", name: "Antigua and Barbuda", flag: "🇦🇬", phoneCode: "+1268" },
    { code: "VG", name: "Virgin Islands, British", flag: "🇻🇬", phoneCode: "+1284" },
    { code: "VI", name: "Virgin Islands, U.S.", flag: "🇻🇮", phoneCode: "+1340" },
    { code: "BM", name: "Bermuda", flag: "🇧🇲", phoneCode: "+1441" },
    { code: "GD", name: "Grenada", flag: "🇬🇩", phoneCode: "+1473" },
    { code: "TC", name: "Turks and Caicos Islands", flag: "🇹🇨", phoneCode: "+1649" },
    { code: "MS", name: "Montserrat", flag: "🇲🇸", phoneCode: "+1664" },
    { code: "MP", name: "Northern Mariana Islands", flag: "🇲🇵", phoneCode: "+1670" },
    { code: "GU", name: "Guam", flag: "🇬🇺", phoneCode: "+1671" },
    { code: "AS", name: "American Samoa", flag: "🇦🇸", phoneCode: "+1684" },
    { code: "LC", name: "Saint Lucia", flag: "🇱🇨", phoneCode: "+1758" },
    { code: "DM", name: "Dominica", flag: "🇩🇲", phoneCode: "+1767" },
    { code: "VC", name: "Saint Vincent and the Grenadines", flag: "🇻🇨", phoneCode: "+1784" },
    { code: "PR", name: "Puerto Rico", flag: "🇵🇷", phoneCode: "+1787" },
    { code: "DO", name: "Dominican Republic", flag: "🇩🇴", phoneCode: "+1809" },
    { code: "TT", name: "Trinidad and Tobago", flag: "🇹🇹", phoneCode: "+1868" },
    { code: "KN", name: "Saint Kitts and Nevis", flag: "🇰🇳", phoneCode: "+1869" },
    { code: "JM", name: "Jamaica", flag: "🇯🇲", phoneCode: "+1876" },
    { code: "EG", name: "Egypt", flag: "🇪🇬", phoneCode: "+20" },
    { code: "SS", name: "South Sudan", flag: "🇸🇸", phoneCode: "+211" },
    { code: "MA", name: "Morocco", flag: "🇲🇦", phoneCode: "+212" },
    { code: "DZ", name: "Algeria", flag: "🇩🇿", phoneCode: "+213" },
    { code: "TN", name: "Tunisia", flag: "🇹🇳", phoneCode: "+216" },
    { code: "LY", name: "Libya", flag: "🇱🇾", phoneCode: "+218" },
    { code: "GM", name: "Gambia", flag: "🇬🇲", phoneCode: "+220" },
    { code: "SN", name: "Senegal", flag: "🇸🇳", phoneCode: "+221" },
    { code: "MR", name: "Mauritania", flag: "🇲🇷", phoneCode: "+222" },
    { code: "ML", name: "Mali", flag: "🇲🇱", phoneCode: "+223" },
    { code: "GN", name: "Guinea", flag: "🇬🇳", phoneCode: "+224" },
    { code: "CI", name: "Ivory Coast", flag: "🇨🇮", phoneCode: "+225" },
    { code: "BF", name: "Burkina Faso", flag: "🇧🇫", phoneCode: "+226" },
    { code: "NE", name: "Niger", flag: "🇳🇪", phoneCode: "+227" },
    { code: "TG", name: "Togo", flag: "🇹🇬", phoneCode: "+228" },
    { code: "BJ", name: "Benin", flag: "🇧🇯", phoneCode: "+229" },
    { code: "MU", name: "Mauritius", flag: "🇲🇺", phoneCode: "+230" },
    { code: "LR", name: "Liberia", flag: "🇱🇷", phoneCode: "+231" },
    { code: "SL", name: "Sierra Leone", flag: "🇸🇱", phoneCode: "+232" },
    { code: "GH", name: "Ghana", flag: "🇬🇭", phoneCode: "+233" },
    { code: "NG", name: "Nigeria", flag: "🇳🇬", phoneCode: "+234" },
    { code: "TD", name: "Chad", flag: "🇹🇩", phoneCode: "+235" },
    { code: "CF", name: "Central African Republic", flag: "🇨🇫", phoneCode: "+236" },
    { code: "CM", name: "Cameroon", flag: "🇨🇲", phoneCode: "+237" },
    { code: "CV", name: "Cape Verde", flag: "🇨🇻", phoneCode: "+238" },
    { code: "ST", name: "Sao Tome and Principe", flag: "🇸🇹", phoneCode: "+239" },
    { code: "GQ", name: "Equatorial Guinea", flag: "🇬🇶", phoneCode: "+240" },
    { code: "GA", name: "Gabon", flag: "🇬🇦", phoneCode: "+241" },
    { code: "CG", name: "Congo Republic", flag: "🇨🇬", phoneCode: "+242" },
    { code: "CD", name: "Congo, Democratic Republic", flag: "🇨🇩", phoneCode: "+243" },
    { code: "AO", name: "Angola", flag: "🇦🇴", phoneCode: "+244" },
    { code: "GW", name: "Guinea-Bissau", flag: "🇬🇼", phoneCode: "+245" },
    { code: "IO", name: "British Indian Ocean Territory", flag: "🇮🇴", phoneCode: "+246" },
    { code: "SC", name: "Seychelles", flag: "🇸🇨", phoneCode: "+248" },
    { code: "SD", name: "Sudan", flag: "🇸🇩", phoneCode: "+249" },
    { code: "RW", name: "Rwanda", flag: "🇷🇼", phoneCode: "+250" },
    { code: "ET", name: "Ethiopia", flag: "🇪🇹", phoneCode: "+251" },
    { code: "SO", name: "Somalia", flag: "🇸🇴", phoneCode: "+252" },
    { code: "DJ", name: "Djibouti", flag: "🇩🇯", phoneCode: "+253" },
    { code: "KE", name: "Kenya", flag: "🇰🇪", phoneCode: "+254" },
    { code: "TZ", name: "Tanzania", flag: "🇹🇿", phoneCode: "+255" },
    { code: "UG", name: "Uganda", flag: "🇺🇬", phoneCode: "+256" },
    { code: "BI", name: "Burundi", flag: "🇧🇮", phoneCode: "+257" },
    { code: "MZ", name: "Mozambique", flag: "🇲🇿", phoneCode: "+258" },
    { code: "ZM", name: "Zambia", flag: "🇿🇲", phoneCode: "+260" },
    { code: "MG", name: "Madagascar", flag: "🇲🇬", phoneCode: "+261" },
    { code: "YT", name: "Mayotte", flag: "🇾🇹", phoneCode: "+262639" },
    { code: "RE", name: "Reunion", flag: "🇷🇪", phoneCode: "+262692" },
    { code: "ZW", name: "Zimbabwe", flag: "🇿🇼", phoneCode: "+263" },
    { code: "NA", name: "Namibia", flag: "🇳🇦", phoneCode: "+264" },
    { code: "MW", name: "Malawi", flag: "🇲🇼", phoneCode: "+265" },
    { code: "LS", name: "Lesotho", flag: "🇱🇸", phoneCode: "+266" },
    { code: "BW", name: "Botswana", flag: "🇧🇼", phoneCode: "+267" },
    { code: "SZ", name: "Swaziland", flag: "🇸🇿", phoneCode: "+268" },
    { code: "KM", name: "Comoros", flag: "🇰🇲", phoneCode: "+269" },
    { code: "ZA", name: "South Africa", flag: "🇿🇦", phoneCode: "+27" },
    { code: "SH", name: "Saint Helena, Ascension and Tristan Da Cunha", flag: "🇸🇭", phoneCode: "+290" },
    { code: "ER", name: "Eritrea", flag: "🇪🇷", phoneCode: "+291" },
    { code: "AW", name: "Aruba", flag: "🇦🇼", phoneCode: "+297" },
    { code: "FO", name: "Faroe Islands", flag: "🇫🇴", phoneCode: "+298" },
    { code: "GL", name: "Greenland", flag: "🇬🇱", phoneCode: "+299" },
    { code: "GR", name: "Greece", flag: "🇬🇷", phoneCode: "+30" },
    { code: "NL", name: "Netherlands", flag: "🇳🇱", phoneCode: "+31" },
    { code: "BE", name: "Belgium", flag: "🇧🇪", phoneCode: "+32" },
    { code: "FR", name: "France", flag: "🇫🇷", phoneCode: "+33" },
    { code: "ES", name: "Spain", flag: "🇪🇸", phoneCode: "+34" },
    { code: "KY", name: "Cayman Islands", flag: "🇰🇾", phoneCode: "+345" },
    { code: "GI", name: "Gibraltar", flag: "🇬🇮", phoneCode: "+350" },
    { code: "PT", name: "Portugal", flag: "🇵🇹", phoneCode: "+351" },
    { code: "LU", name: "Luxembourg", flag: "🇱🇺", phoneCode: "+352" },
    { code: "IE", name: "Ireland", flag: "🇮🇪", phoneCode: "+353" },
    { code: "IS", name: "Iceland", flag: "🇮🇸", phoneCode: "+354" },
    { code: "AL", name: "Albania", flag: "🇦🇱", phoneCode: "+355" },
    { code: "MT", name: "Malta", flag: "🇲🇹", phoneCode: "+356" },
    { code: "CY", name: "Cyprus", flag: "🇨🇾", phoneCode: "+357" },
    { code: "FI", name: "Finland", flag: "🇫🇮", phoneCode: "+358" },
    { code: "BG", name: "Bulgaria", flag: "🇧🇬", phoneCode: "+359" },
    { code: "HU", name: "Hungary", flag: "🇭🇺", phoneCode: "+36" },
    { code: "LT", name: "Lithuania", flag: "🇱🇹", phoneCode: "+370" },
    { code: "LV", name: "Latvia", flag: "🇱🇻", phoneCode: "+371" },
    { code: "EE", name: "Estonia", flag: "🇪🇪", phoneCode: "+372" },
    { code: "MD", name: "Moldova", flag: "🇲🇩", phoneCode: "+373" },
    { code: "AM", name: "Armenia", flag: "🇦🇲", phoneCode: "+374" },
    { code: "BY", name: "Belarus", flag: "🇧🇾", phoneCode: "+375" },
    { code: "AD", name: "Andorra", flag: "🇦🇩", phoneCode: "+376" },
    { code: "MC", name: "Monaco", flag: "🇲🇨", phoneCode: "+377" },
    { code: "SM", name: "San Marino", flag: "🇸🇲", phoneCode: "+378" },
    { code: "VA", name: "Vatican City State", flag: "🇻🇦", phoneCode: "+379" },
    { code: "UA", name: "Ukraine", flag: "🇺🇦", phoneCode: "+380" },
    { code: "RS", name: "Serbia", flag: "🇷🇸", phoneCode: "+381" },
    { code: "ME", name: "Montenegro", flag: "🇲🇪", phoneCode: "+382" },
    { code: "XK", name: "Kosovo", flag: "🇽🇰", phoneCode: "+383" },
    { code: "HR", name: "Croatia", flag: "🇭🇷", phoneCode: "+385" },
    { code: "SI", name: "Slovenia", flag: "🇸🇮", phoneCode: "+386" },
    { code: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦", phoneCode: "+387" },
    { code: "MK", name: "North Macedonia", flag: "🇲🇰", phoneCode: "+389" },
    { code: "IT", name: "Italy", flag: "🇮🇹", phoneCode: "+39" },
    { code: "RO", name: "Romania", flag: "🇷🇴", phoneCode: "+40" },
    { code: "CH", name: "Switzerland", flag: "🇨🇭", phoneCode: "+41" },
    { code: "CZ", name: "Czech Republic", flag: "🇨🇿", phoneCode: "+420" },
    { code: "SK", name: "Slovakia", flag: "🇸🇰", phoneCode: "+421" },
    { code: "LI", name: "Liechtenstein", flag: "🇱🇮", phoneCode: "+423" },
    { code: "AT", name: "Austria", flag: "🇦🇹", phoneCode: "+43" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", phoneCode: "+44" },
    { code: "DK", name: "Denmark", flag: "🇩🇰", phoneCode: "+45" },
    { code: "SE", name: "Sweden", flag: "🇸🇪", phoneCode: "+46" },
    { code: "NO", name: "Norway", flag: "🇳🇴", phoneCode: "+47" },
    { code: "PL", name: "Poland", flag: "🇵🇱", phoneCode: "+48" },
    { code: "DE", name: "Germany", flag: "🇩🇪", phoneCode: "+49" },
    { code: "FK", name: "Falkland Islands (Malvinas)", flag: "🇫🇰", phoneCode: "+500" },
    { code: "BZ", name: "Belize", flag: "🇧🇿", phoneCode: "+501" },
    { code: "GT", name: "Guatemala", flag: "🇬🇹", phoneCode: "+502" },
    { code: "SV", name: "El Salvador", flag: "🇸🇻", phoneCode: "+503" },
    { code: "HN", name: "Honduras", flag: "🇭🇳", phoneCode: "+504" },
    { code: "NI", name: "Nicaragua", flag: "🇳🇮", phoneCode: "+505" },
    { code: "CR", name: "Costa Rica", flag: "🇨🇷", phoneCode: "+506" },
    { code: "PA", name: "Panama", flag: "🇵🇦", phoneCode: "+507" },
    { code: "PM", name: "Saint Pierre and Miquelon", flag: "🇵🇲", phoneCode: "+508" },
    { code: "HT", name: "Haiti", flag: "🇭🇹", phoneCode: "+509" },
    { code: "PE", name: "Peru", flag: "🇵🇪", phoneCode: "+51" },
    { code: "MX", name: "Mexico", flag: "🇲🇽", phoneCode: "+52" },
    { code: "CU", name: "Cuba", flag: "🇨🇺", phoneCode: "+53" },
    { code: "AR", name: "Argentina", flag: "🇦🇷", phoneCode: "+54" },
    { code: "BR", name: "Brazil", flag: "🇧🇷", phoneCode: "+55" },
    { code: "CL", name: "Chile", flag: "🇨🇱", phoneCode: "+56" },
    { code: "CO", name: "Colombia", flag: "🇨🇴", phoneCode: "+57" },
    { code: "VE", name: "Venezuela", flag: "🇻🇪", phoneCode: "+58" },
    { code: "GP", name: "Guadeloupe", flag: "🇬🇵", phoneCode: "+590" },
    { code: "BO", name: "Bolivia", flag: "🇧🇴", phoneCode: "+591" },
    { code: "GY", name: "Guyana", flag: "🇬🇾", phoneCode: "+592" },
    { code: "EC", name: "Ecuador", flag: "🇪🇨", phoneCode: "+593" },
    { code: "GF", name: "French Guiana", flag: "🇬🇫", phoneCode: "+594" },
    { code: "PY", name: "Paraguay", flag: "🇵🇾", phoneCode: "+595" },
    { code: "MQ", name: "Martinique", flag: "🇲🇶", phoneCode: "+596" },
    { code: "SR", name: "Suriname", flag: "🇸🇷", phoneCode: "+597" },
    { code: "UY", name: "Uruguay", flag: "🇺🇾", phoneCode: "+598" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", phoneCode: "+60" },
    { code: "AU", name: "Australia", flag: "🇦🇺", phoneCode: "+61" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", phoneCode: "+62" },
    { code: "PH", name: "Philippines", flag: "🇵🇭", phoneCode: "+63" },
    { code: "NZ", name: "New Zealand", flag: "🇳🇿", phoneCode: "+64" },
    { code: "SG", name: "Singapore", flag: "🇸🇬", phoneCode: "+65" },
    { code: "TH", name: "Thailand", flag: "🇹🇭", phoneCode: "+66" },
    { code: "TL", name: "Timor-Leste", flag: "🇹🇱", phoneCode: "+670" },
    { code: "AQ", name: "Antarctica", flag: "🇦🇶", phoneCode: "+672" },
    { code: "BN", name: "Brunei", flag: "🇧🇳", phoneCode: "+673" },
    { code: "NR", name: "Nauru", flag: "🇳🇷", phoneCode: "+674" },
    { code: "PG", name: "Papua New Guinea", flag: "🇵🇬", phoneCode: "+675" },
    { code: "TO", name: "Tonga", flag: "🇹🇴", phoneCode: "+676" },
    { code: "SB", name: "Solomon Islands", flag: "🇸🇧", phoneCode: "+677" },
    { code: "VU", name: "Vanuatu", flag: "🇻🇺", phoneCode: "+678" },
    { code: "FJ", name: "Fiji", flag: "🇫🇯", phoneCode: "+679" },
    { code: "PW", name: "Palau", flag: "🇵🇼", phoneCode: "+680" },
    { code: "WF", name: "Wallis and Futuna", flag: "🇼🇫", phoneCode: "+681" },
    { code: "CK", name: "Cook Islands", flag: "🇨🇰", phoneCode: "+682" },
    { code: "NU", name: "Niue", flag: "🇳🇺", phoneCode: "+683" },
    { code: "WS", name: "Samoa", flag: "🇼🇸", phoneCode: "+685" },
    { code: "KI", name: "Kiribati", flag: "🇰🇮", phoneCode: "+686" },
    { code: "NC", name: "New Caledonia", flag: "🇳🇨", phoneCode: "+687" },
    { code: "TV", name: "Tuvalu", flag: "🇹🇻", phoneCode: "+688" },
    { code: "PF", name: "French Polynesia", flag: "🇵🇫", phoneCode: "+689" },
    { code: "TK", name: "Tokelau", flag: "🇹🇰", phoneCode: "+690" },
    { code: "FM", name: "Micronesia", flag: "🇫🇲", phoneCode: "+691" },
    { code: "MH", name: "Marshall Islands", flag: "🇲🇭", phoneCode: "+692" },
    { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", phoneCode: "+7" },
    { code: "RU", name: "Russia", flag: "🇷🇺", phoneCode: "+7" },
    { code: "JP", name: "Japan", flag: "🇯🇵", phoneCode: "+81" },
    { code: "KR", name: "South Korea", flag: "🇰🇷", phoneCode: "+82" },
    { code: "VN", name: "Vietnam", flag: "🇻🇳", phoneCode: "+84" },
    { code: "KP", name: "North Korea", flag: "🇰🇵", phoneCode: "+850" },
    { code: "HK", name: "Hong Kong", flag: "🇭🇰", phoneCode: "+852" },
    { code: "MO", name: "Macao", flag: "🇲🇴", phoneCode: "+853" },
    { code: "KH", name: "Cambodia", flag: "🇰🇭", phoneCode: "+855" },
    { code: "LA", name: "Laos", flag: "🇱🇦", phoneCode: "+856" },
    { code: "CN", name: "China", flag: "🇨🇳", phoneCode: "+86" },
    { code: "BD", name: "Bangladesh", flag: "🇧🇩", phoneCode: "+880" },
    { code: "TW", name: "Taiwan", flag: "🇹🇼", phoneCode: "+886" },
    { code: "TR", name: "Turkey", flag: "🇹🇷", phoneCode: "+90" },
    { code: "IN", name: "India", flag: "🇮🇳", phoneCode: "+91" },
    { code: "PK", name: "Pakistan", flag: "🇵🇰", phoneCode: "+92" },
    { code: "AF", name: "Afghanistan", flag: "🇦🇫", phoneCode: "+93" },
    { code: "LK", name: "Sri Lanka", flag: "🇱🇰", phoneCode: "+94" },
    { code: "MM", name: "Myanmar", flag: "🇲🇲", phoneCode: "+95" },
    { code: "MV", name: "Maldives", flag: "🇲🇻", phoneCode: "+960" },
    { code: "LB", name: "Lebanon", flag: "🇱🇧", phoneCode: "+961" },
    { code: "JO", name: "Jordan", flag: "🇯🇴", phoneCode: "+962" },
    { code: "SY", name: "Syria", flag: "🇸🇾", phoneCode: "+963" },
    { code: "IQ", name: "Iraq", flag: "🇮🇶", phoneCode: "+964" },
    { code: "KW", name: "Kuwait", flag: "🇰🇼", phoneCode: "+965" },
    { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", phoneCode: "+966" },
    { code: "YE", name: "Yemen", flag: "🇾🇪", phoneCode: "+967" },
    { code: "OM", name: "Oman", flag: "🇴🇲", phoneCode: "+968" },
    { code: "PS", name: "Palestine", flag: "🇵🇸", phoneCode: "+970" },
    { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", phoneCode: "+971" },
    { code: "IL", name: "Israel", flag: "🇮🇱", phoneCode: "+972" },
    { code: "BH", name: "Bahrain", flag: "🇧🇭", phoneCode: "+973" },
    { code: "QA", name: "Qatar", flag: "🇶🇦", phoneCode: "+974" },
    { code: "BT", name: "Bhutan", flag: "🇧🇹", phoneCode: "+975" },
    { code: "MN", name: "Mongolia", flag: "🇲🇳", phoneCode: "+976" },
    { code: "NP", name: "Nepal", flag: "🇳🇵", phoneCode: "+977" },
    { code: "IR", name: "Iran", flag: "🇮🇷", phoneCode: "+98" },
    { code: "TJ", name: "Tajikistan", flag: "🇹🇯", phoneCode: "+992" },
    { code: "TM", name: "Turkmenistan", flag: "🇹🇲", phoneCode: "+993" },
    { code: "AZ", name: "Azerbaijan", flag: "🇦🇿", phoneCode: "+994" },
    { code: "GE", name: "Georgia", flag: "🇬🇪", phoneCode: "+995" },
    { code: "KG", name: "Kyrgyzstan", flag: "🇰🇬", phoneCode: "+996" },
    { code: "UZ", name: "Uzbekistan", flag: "🇺🇿", phoneCode: "+998" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phoneNumber: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "IN") || countries[0]); // Default to India
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearchTerm, setCountrySearchTerm] = useState("");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // For phoneNumber field, only allow numbers, spaces, dashes, parentheses, and plus sign
        if (name === 'phoneNumber') {
            const phoneRegex = /^[0-9\s\-\(\)\+]*$/;
            if (!phoneRegex.test(value)) {
                return; // Don't update if invalid characters
            }
        }
        
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    // Filter countries based on search term
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
        country.phoneCode.includes(countrySearchTerm) ||
        country.code.toLowerCase().includes(countrySearchTerm.toLowerCase())
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Combine country code with phone number
            const formattedPhone = formData.phoneNumber ? `${selectedCountry.phoneCode} ${formData.phoneNumber}` : "";
            
            const res = await fetch("/api/contact/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    source: "contact",
                    ...formData,
                    phoneNumber: formattedPhone
                }),
            });

            const result = await res.json();

            if (res.ok) {
                setModalMessage("Submitted successfully!");
                setModalType("success");
                setModalOpen(true);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    phoneNumber: "",
                    message: "",
                });
            } else {
                setModalMessage(result.message || "Submission failed.");
                setModalType("error");
                setModalOpen(true);
            }
        } catch (err) {
            console.error(err);
            setModalMessage("Server error. Please try again.");
            setModalType("error");
            setModalOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black px-4 py-8 md:py-16 text-black dark:text-white relative overflow-hidden ">
            <div className="absolute inset-x-0 top-0 h-64 pointer-events-none z-0 blur-3xl opacity-40 dark:opacity-20 mt-50"
                style={{ background: "radial-gradient(ellipse at center, #abff02 0%, transparent 80%)" }} />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8 mt-20">
                {/* <button className="text-xs px-4 py-1 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-black hover:bg-[#abff02] hover:text-black transition">
                    Contact
                </button> */}

                <h1 className="text-3xl md:text-4xl font-bold">Get in Touch with Us</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                    Have questions or need AI solutions? Let us know by filling out the form, and we&apos;ll be in touch!
                </p>

                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {/* Email Box */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 dark:border-white/10 text-left">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-[#abff02]/20 rounded-lg">
                                    <Mail className="w-5 h-5 text-[#abff02]" />
                                </div>
                                <span className="font-semibold">E-mail</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">info@mendygo.com</p>
                        </div>
                    </div>

                    {/* Phone Box */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 dark:border-white/10 text-left">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-[#abff02]/20 rounded-lg">
                                    <Phone className="w-5 h-5 text-[#abff02]" />
                                </div>
                                <span className="font-semibold">Phone</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">+91 7357756699</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="relative group mt-6 md:mt-8">
                    <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-2xl opacity-10 group-hover:opacity-15 transition-opacity duration-300" />
                    <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/20 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name*"
                            required
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            required
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <div className="relative">
                            <div className="flex">
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                        className="flex items-center gap-2 px-3 py-3 rounded-l-lg border border-black/20 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-sm text-black dark:text-white hover:bg-white/80 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 transition-all"
                                    >
                                        <span className="text-lg">{selectedCountry.flag}</span>
                                        <span className="text-sm">{selectedCountry.phoneCode}</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isCountryDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-neutral-800 border border-black/20 dark:border-white/20 rounded-lg shadow-xl z-50"
                                            >
                                                <div className="p-2 border-b border-white/20 dark:border-white/10">
                                                    <input
                                                        type="text"
                                                        placeholder="Search countries..."
                                                        value={countrySearchTerm}
                                                        onChange={(e) => setCountrySearchTerm(e.target.value)}
                                                        className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 border border-black/20 dark:border-white/20 rounded text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 text-sm"
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="max-h-48 overflow-y-auto">
                                                    {filteredCountries.length > 0 ? (
                                                        filteredCountries.map((country) => (
                                                            <button
                                                                key={country.code}
                                                                type="button"
                                                                onClick={() => {
                                                                    setSelectedCountry(country);
                                                                    setIsCountryDropdownOpen(false);
                                                                    setCountrySearchTerm("");
                                                                }}
                                                                className="w-full flex items-center gap-3 px-3 py-2 text-left text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition"
                                                            >
                                                                <span className="text-lg">{country.flag}</span>
                                                                <span className="text-sm flex-1">{country.name}</span>
                                                                <span className="text-sm text-gray-600 dark:text-white/60">{country.phoneCode}</span>
                                                            </button>
                                                        ))
                                                    ) : (
                                                        <div className="px-3 py-4 text-center text-gray-600 dark:text-white/60 text-sm">
                                                            No countries found
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="flex-1 rounded-r-lg border-l-0 border border-black/20 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-sm px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                                />
                            </div>
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message..."
                            rows={4}
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 sm:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#abff02] hover:bg-[#c7ff5f] text-black font-semibold py-3 px-6 rounded-lg sm:col-span-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 disabled:opacity-50"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>

                <SuccessModal
                    isOpen={modalOpen}
                    message={modalMessage}
                    onClose={() => setModalOpen(false)}
                    type={modalType}
                />
            </div>
        </div>
    );
};

export default Contact;