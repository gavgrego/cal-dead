import { Anchor, createStyles, Grid, Text } from "@mantine/core";
import { NextPage } from "next";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { AmountWithCurrencyCodeOptional } from "@paypal/paypal-js";
import StickersBG from "../assets/stickers-bg.jpg";
import Image from "next/image";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  container: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      margin: "2rem 1rem 0",
    },
  },
}));

const Shop: NextPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const { classes } = useStyles();
  return (
    <Grid className={classes.container}>
      {paymentSuccess ? (
        <Grid.Col>
          <Text size="lg" weight="bold">
            Hey now!🌹💀 Look out for your stickers in the mail within the next
            week or so, if you haven&apos;t received them in 2 weeks feel free
            to send me an email as a reminder. Thanks again and&nbsp;
            <Anchor
              style={{
                textDecoration: "underline",
              }}
              target="_blank"
              href="https://www.instagram.com/goldenstatedead/"
            >
              tag me on Instagram!
            </Anchor>
          </Text>
        </Grid.Col>
      ) : (
        <Grid.Col>
          <Text size="xl" weight="bold">
            3 logo stickers for $5!
          </Text>
          <Text size="sm" weight="bold">
            High quality vinyl, 3&quot; diameter, artwork done by&nbsp;
            <Anchor
              style={{
                textDecoration: "underline",
              }}
              target="_blank"
              href="https://www.instagram.com/__masawave/"
            >
              まささん!
            </Anchor>
          </Text>
          <Image
            alt={"Image of GOLDENSTATEDEAD.COM stickers"}
            src={StickersBG}
            width="400"
            height="300"
          />
          <Grid>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: "GOLDENSTATEDEAD.COM logo sticker 3 pack",
                      amount: {
                        value: "5.00",
                        breakdown: {
                          item_total: {
                            currency_code: "USD",
                            value: "5",
                          },
                        },
                      },
                      items: [
                        {
                          name: "logo stickers",
                          quantity: "1",
                          unit_amount: {
                            currency_code: "USD",
                            value: "5",
                          },
                        },
                      ],
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order!.capture().then(() => {
                  setPaymentSuccess(true);
                });
              }}
              style={{ layout: "horizontal" }}
            />
          </Grid>
        </Grid.Col>
      )}
    </Grid>
  );
};

export default Shop;
