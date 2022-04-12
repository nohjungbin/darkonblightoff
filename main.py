def on_forever():
    if input.light_level() <= 45:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    else:
        basic.show_number(input.light_level())
basic.forever(on_forever)
